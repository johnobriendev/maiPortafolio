"use client";

import { useActionState } from "react";
import { sendContactEmail, ContactFormState } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, action, isPending] = useActionState<ContactFormState, FormData>(
    sendContactEmail,
    null
  );

  if (state?.success) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-black text-white mb-2">Message sent!</p>
        <p className="text-brand-blush/70">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      {state?.error && (
        <p className="text-brand-blush text-sm font-medium">{state.error}</p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand-gold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest py-4 rounded transition-opacity"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
