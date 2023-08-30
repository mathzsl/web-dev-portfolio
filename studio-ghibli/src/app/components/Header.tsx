import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <nav className="flex items-center justify-between h-24">
      <img src="/images/logo.svg" alt="Studio Ghibli logo" />

      <div className="flex items-center gap-7">
        <a href="https://www.facebook.com/StudioGhibliBrasil/" target="_blank">
          <Facebook className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200 " />
        </a>

        <a href="https://www.instagram.com/ghibliusa/" target="_blank">
          <Instagram className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </a>

        <a href="https://twitter.com/ghibliusa" target="_blank">
          <Twitter className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </a>

        <a href="https://www.youtube.com/watch?v=SgZI655GgHk" target="_blank">
          <Youtube className="w-6 h-6 text-zinc-200 hover:text-zinc-100 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  );
}
