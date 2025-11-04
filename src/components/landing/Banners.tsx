import Image from 'next/image';

export default function Banners() {
  return (
    <section className="bg-background">
      <div className="container py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/banners/banner-1-placeholder.jpg"
              alt="Banner 1"
              fill
              className="object-cover rounded-md"
              data-ai-hint="promotional banner"
            />
          </div>
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/banners/banner-2-placeholder.jpg"
              alt="Banner 2"
              fill
              className="object-cover rounded-md"
              data-ai-hint="event details"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
