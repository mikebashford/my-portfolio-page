import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
};

export default function ContactFormEmail({
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <div>
      <Html />
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-blue-500 my-10 px-10 py-4 rounded-xl">
              <Heading className="leading-tight">
                You received the following message
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sent from: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </div>
  );
}
