import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    // Dark section for contrast — the one "dramatic" moment in an otherwise light site
    <section id="contact" className="bg-brand-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading + blurb */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Work<br />With Me
            </h2>
            <p className="text-brand-blush/70 leading-relaxed">
              {/* TODO: Customize this copy for the creator */}
              Interested in collaborations, sponsorships, or brand partnerships?
              Fill out the form and I&apos;ll get back to you soon.
            </p>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
