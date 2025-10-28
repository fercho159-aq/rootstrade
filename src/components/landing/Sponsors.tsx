
'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Sponsors() {
  const sponsors = PlaceHolderImages.filter(img => img.id.startsWith("sponsor-"));
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Con la confianza de las principales empresas
            </h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {sponsors.map((sponsor) => (
                <CarouselItem key={sponsor.id} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
                  <div className="flex justify-center p-4">
                    <Image
                      src={sponsor.imageUrl}
                      alt={sponsor.description}
                      width={158}
                      height={48}
                      data-ai-hint={sponsor.imageHint}
                      className="grayscale opacity-60 transition-opacity hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
