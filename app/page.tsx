import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VideosSection from "@/components/sections/VideosSection";
import FeedSection from "@/components/sections/FeedSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideosSection />
        <FeedSection />
        <ContactSection />
      </main>
      <footer className="bg-brand-dark border-t border-white/10 py-8 px-4 text-center">
        <p className="text-brand-muted text-sm">
          &copy; {new Date().getFullYear()} Mailen Ichochea. All rights reserved.
        </p>
      </footer>
    </>
  );
}
