import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-semibold font-headline text-primary">Roots.trade</span>
      </Link>
    </header>
  );
}
