import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Sponsors() {
  const sponsors = PlaceHolderImages.filter(img => img.id.startsWith("sponsor-"));

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Con la confianza de las principales empresas
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex justify-center">
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.description}
                  width={158}
                  height={48}
                  data-ai-hint={sponsor.imageHint}
                  className="grayscale opacity-60 transition-opacity hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
