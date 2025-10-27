import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-background shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-8 w-8 text-primary" />
        <div className="ml-3">
            <div className="text-sm font-semibold tracking-widest text-primary">RULES OF ORIGIN</div>
            <div className="text-sm font-semibold tracking-widest text-primary">TRADE SOLUTIONS</div>
        </div>
      </Link>
    </header>
  );
}
