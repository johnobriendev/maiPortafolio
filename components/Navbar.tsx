"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Videos", href: "#videos" },
  { label: "Feed", href: "#feed" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-cream/95 backdrop-blur border-b border-brand-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#hero" className="text-brand-dark font-black text-xl tracking-tight">
          MAILEN <span className="text-brand-gold">ICHOCHEA</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={cn("block w-6 h-0.5 bg-brand-dark transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 bg-brand-dark transition-all", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-brand-dark transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-border px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
