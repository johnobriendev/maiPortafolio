import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          <Heading style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
            New Contact Form Submission
          </Heading>
          <Hr />
          <Section style={{ marginTop: "24px" }}>
            <Text style={{ margin: "0 0 4px", color: "#6b7280", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              From
            </Text>
            <Text style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: "600" }}>
              {name}
            </Text>

            <Text style={{ margin: "0 0 4px", color: "#6b7280", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Reply To
            </Text>
            <Text style={{ margin: "0 0 16px", fontSize: "16px" }}>
              {email}
            </Text>

            <Hr />

            <Text style={{ margin: "16px 0 4px", color: "#6b7280", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Message
            </Text>
            <Text style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
