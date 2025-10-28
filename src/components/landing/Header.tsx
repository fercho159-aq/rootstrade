import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-background shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image src="https://picsum.photos/seed/logo/150/40" alt="Roots.trade Logo" width={150} height={40} className="h-10 w-auto" />
      </Link>
    </header>
  );
}
