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

// ─────────────────────────────────────────────────────────────────────────────
// Email template rendered server-side and handed to Resend as `react`.
// Uses the same navy / blue palette as the site (#043F8C / #0597F2) so the
// notification feels consistent with the brand.
// ─────────────────────────────────────────────────────────────────────────────

export function ContactNotificationEmail({
  firstName,
  lastName,
  email,
  phone,
  address,
  ageRangeLabel,
  message,
}) {
  return (
    <Html>
      <Head />
      <Preview>
        New contact form submission from {firstName} {lastName}
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>New Contact Form Submission</Heading>
          <Text style={styles.subheading}>
            A family has submitted the contact form on your website.
          </Text>

          <Hr style={styles.hr} />

          <Section>
            <Row label="Name" value={`${firstName} ${lastName}`} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone} />
            {address ? <Row label="Address" value={address} /> : null}
            <Row label="Child's Age Range" value={ageRangeLabel} />
          </Section>

          {message ? (
            <>
              <Hr style={styles.hr} />
              <Text style={styles.label}>Message</Text>
              <Text style={styles.message}>{message}</Text>
            </>
          ) : null}

          <Hr style={styles.hr} />
          <Text style={styles.footer}>
            Reply directly to this email to respond to {firstName}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }) {
  return (
    <Text style={styles.row}>
      <span style={styles.label}>{label}: </span>
      <span style={styles.value}>{value}</span>
    </Text>
  );
}

const styles = {
  body: {
    backgroundColor: "#f0f4fa",
    fontFamily: "Helvetica, Arial, sans-serif",
    padding: "32px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    margin: "0 auto",
    maxWidth: "560px",
    padding: "32px",
  },
  heading: {
    color: "#043F8C",
    fontSize: "22px",
    fontWeight: 800,
    margin: "0 0 8px",
  },
  subheading: {
    color: "#4a6080",
    fontSize: "14px",
    margin: "0 0 16px",
  },
  hr: {
    borderColor: "#e3e9f3",
    margin: "20px 0",
  },
  row: {
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0 0 6px",
  },
  label: {
    color: "#043F8C",
    fontWeight: 700,
  },
  value: {
    color: "#2d4a7a",
  },
  message: {
    color: "#2d4a7a",
    fontSize: "14px",
    lineHeight: "22px",
    whiteSpace: "pre-wrap",
  },
  footer: {
    color: "#6b7d9c",
    fontSize: "12px",
    margin: 0,
  },
};

export default ContactNotificationEmail;