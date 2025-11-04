import Image from 'next/image';

export default function Banners() {
  return (
    <section className="bg-background">
      <div className="container py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full">
            <Image
              src="/images/WhatsApp Image 2025-11-04 at 07.08.25.jpeg"
              alt="Banner 1"
              width={1080}
              height={1080}
              className="object-contain rounded-md w-full h-auto"
              data-ai-hint="promotional banner"
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/images/WhatsApp Image 2025-11-04 at 07.08.46.jpeg"
              alt="Banner 2"
              width={1080}
              height={1080}
              className="object-contain rounded-md w-full h-auto"
              data-ai-hint="event details"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
