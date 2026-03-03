"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/emails/ContactEmail";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
} | null;

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
    return { success: false, error: firstError };
  }

  const { name, email, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_EMAIL;

  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
    return { success: false, error: "Server configuration error. Please try again later." };
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>", // TODO: update to your verified Resend domain
    to: toEmail,
    replyTo: email,
    subject: `New message from ${name}`,
    react: ContactEmail({ name, email, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
