'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

interface EventDetails {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

type AddToCalendarProps = {
    variant?: VariantProps<typeof buttonVariants>['variant'];
}

export default function AddToCalendar({ variant = 'default' }: AddToCalendarProps) {
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [calendarLinks, setCalendarLinks] = useState({
    google: '#',
    ical: '#',
  });

  useEffect(() => {
    // Event details should be fetched or passed, but we'll hardcode them here.
    // Using useEffect to ensure Date objects are only created on the client.
    const startTime = new Date('2024-12-25T16:00:00Z'); // 10:00 Mexico City time (UTC-6)
    const endTime = new Date('2024-12-25T18:00:00Z'); // 12:00 Mexico City time (UTC-6)

    const eventDetails: EventDetails = {
      title: 'Evento Exclusivo Roots.trade',
      description: 'Descubre estrategias innovadoras, conecta con líderes de la industria y transforma tu negocio. Enlace de acceso: [Link del evento]',
      location: 'Online',
      startTime,
      endTime,
    };
    setEvent(eventDetails);

    const formatGoogleDate = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}Z$/g, '') + 'Z';
    const formatDateICS = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}Z$/g, '') + 'Z';

    const googleLink = new URL('https://www.google.com/calendar/render');
    googleLink.searchParams.append('action', 'TEMPLATE');
    googleLink.searchParams.append('text', eventDetails.title);
    googleLink.searchParams.append('dates', `${formatGoogleDate(eventDetails.startTime)}/${formatGoogleDate(eventDetails.endTime)}`);
    googleLink.searchParams.append('details', eventDetails.description);
    googleLink.searchParams.append('location', eventDetails.location);

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatDateICS(eventDetails.startTime).replace(/:/g, '')}`,
      `DTEND:${formatDateICS(eventDetails.endTime).replace(/:/g, '')}`,
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:${eventDetails.description}`,
      `LOCATION:${eventDetails.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');

    const icsLink = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
    
    setCalendarLinks({
        google: googleLink.toString(),
        ical: icsLink,
    });

  }, []);

  if (!event) {
    return null;
  }

  const buttonSize = variant === 'link' ? 'default' : 'lg';
  const buttonClassName = variant === 'link' ? 'text-accent p-0 h-auto' : 'bg-primary hover:bg-primary/90 text-primary-foreground';

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={buttonSize} variant={variant} className={buttonClassName}>
            <CalendarPlus className="mr-2 h-5 w-5" />
            Añadir al Calendario
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <a href={calendarLinks.google} target="_blank" rel="noopener noreferrer">
              Google Calendar
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={calendarLinks.ical} download="event.ics">
              iCal / Outlook
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}