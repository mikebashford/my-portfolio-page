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
        <Body>
          <Container>
            <Section>
              <Heading>You received the following message</Heading>
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
