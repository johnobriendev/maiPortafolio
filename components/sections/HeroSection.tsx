import Image from "next/image";
import { Instagram, ExternalLink, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-cream flex flex-col items-center justify-center px-4 text-center overflow-hidden"
    >
      {/* Decorative blush gradient orb — top right */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blush/20 blur-3xl pointer-events-none" />
      {/* Decorative gold orb — bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
        {/* Profile image — drop mailen.png into /public */}
        <div className="w-28 h-28 rounded-full border-2 border-brand-gold overflow-hidden">
          <Image
            src="/mailen.png"
            alt="Mailen Ichochea"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <div>
          <h1 className="text-5xl sm:text-7xl font-black text-brand-dark tracking-tight leading-none">
            MAILEN
            <br />
            <span className="text-brand-gold">ICHOCHEA</span>
          </h1>
          <p className="mt-4 text-brand-muted text-lg font-medium max-w-md mx-auto">
            {/* TODO: Replace with creator tagline */}
            Beauty · Lifestyle · Self-Care
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {/* TODO: Add real social URLs */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            <span className="text-sm font-black">T</span>
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="#videos"
            className="bg-brand-gold hover:opacity-90 text-white font-black uppercase tracking-widest px-8 py-3 rounded transition-opacity"
          >
            Watch My Content
          </a>
          <a
            href="#contact"
            className="border border-brand-border hover:border-brand-gold text-brand-muted hover:text-brand-gold font-bold uppercase tracking-widest px-8 py-3 rounded transition-colors"
          >
            Work With Me
          </a>
        </div>
      </div>

      {/* Scroll indicator — pulsing ring + arrow */}
      <a
        href="#videos"
        aria-label="Scroll to videos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <div className="relative flex items-center justify-center w-12 h-12">
          {/* Pulsing ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold/30 animate-ping" />
          {/* Inner circle with chevron */}
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold">
            <ChevronDown size={18} className="text-brand-gold" />
          </span>
        </div>
      </a>
    </section>
  );
}
