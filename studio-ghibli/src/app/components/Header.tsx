import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <nav className="flex items-center justify-between h-24">
      <img src="/images/logo.svg" alt="Studio Ghibli logo" />

      <div className="flex items-center gap-7">
        <Link href="">
          <Facebook className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200 " />
        </Link>

        <Link href="">
          <Instagram className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </Link>

        <Link href="">
          <Twitter className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </Link>

        <Link href="">
          <Youtube className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </Link>
      </div>
    </nav>
  );
}
