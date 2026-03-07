/* ─── Privacy Policy Page ─────────────────────────────────────────── */

export default function PrivacyPolicy() {
  const year = new Date().getFullYear();

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <style>{`
        .pp-body p {
          margin-bottom: 16px;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.6;
        }
        .pp-body ul, .pp-body ol {
          margin-bottom: 16px;
          margin-left: 24px;
        }
        .pp-body strong {
          color: #111827;
          font-weight: 600;
        }
        .pp-body a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .pp-h1 { font-size: 28px !important; }
          .pp-h2 { font-size: 20px !important; }
          .pp-container { padding: 20px 16px !important; }
        }
      `}</style>
      <div
        className="pp-container pp-body"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
          background: "#ffffff",
          minHeight: "100vh",
        }}
      >
        {/* Back link */}
        <div style={{ marginBottom: "24px" }}>
          <a
            href="/"
            data-ocid="privacy.back_link"
            style={{
              color: "#667eea",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← Back to t09n.com
          </a>
        </div>

        {/* Header */}
        <div
          style={{
            borderBottom: "3px solid #667eea",
            paddingBottom: "20px",
            marginBottom: "40px",
          }}
        >
          <h1
            className="pp-h1"
            style={{
              fontSize: "36px",
              color: "#111827",
              marginBottom: "10px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Last Updated: March 4, 2026
          </p>
        </div>

        {/* Highlight box — your privacy matters */}
        <HighlightBox>
          <p style={{ marginBottom: "8px" }}>
            <strong>Your Privacy Matters to Us</strong>
          </p>
          <p style={{ margin: 0 }}>
            At t09n.com, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, store, and protect your data
            when you use our translation platform.
          </p>
        </HighlightBox>

        {/* Section 1 */}
        <Section title="1. Introduction">
          <p>
            t09n.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;the Platform&rdquo;) is a professional translation platform
            that provides Computer-Assisted Translation (CAT) tools, machine
            translation post-editing (MTPE), translation quality assessment
            (TQA), and related services to translators and translation agencies.
          </p>
          <p>
            This Privacy Policy applies to all users of t09n.com, including:
          </p>
          <ul>
            <Li>Free plan users</Li>
            <Li>Pay-as-you-go users</Li>
            <Li>Subscription users (Starter, Professional, Business plans)</Li>
            <Li>Team members and collaborators</Li>
            <Li>Website visitors</Li>
          </ul>
          <p>
            By accessing or using t09n.com, you agree to the terms of this
            Privacy Policy. If you do not agree with this policy, please do not
            use our services.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Information We Collect">
          <SubSection title="2.1 Information You Provide to Us">
            <p>
              <strong>Account Information:</strong>
            </p>
            <ul>
              <Li>Name (first and last name)</Li>
              <Li>Email address</Li>
              <Li>Password (encrypted and hashed)</Li>
              <Li>Phone number (optional)</Li>
              <Li>Company name (optional)</Li>
              <Li>Billing address</Li>
              <Li>
                Payment information (processed securely through third-party
                payment processors)
              </Li>
            </ul>

            <p>
              <strong>Profile Information:</strong>
            </p>
            <ul>
              <Li>Language pairs (source and target languages)</Li>
              <Li>Translation specializations</Li>
              <Li>Professional experience level</Li>
              <Li>Profile picture (optional)</Li>
              <Li>Bio/description (optional)</Li>
            </ul>

            <p>
              <strong>User-Generated Content:</strong>
            </p>
            <ul>
              <Li>
                Documents uploaded for translation (DOCX, PDF, TXT, XLSX files)
              </Li>
              <Li>Source text and translated text</Li>
              <Li>Glossaries and term bases</Li>
              <Li>Translation Memory (TMX files)</Li>
              <Li>Project files and metadata</Li>
              <Li>Comments and feedback on translations</Li>
              <Li>Quality assessment reports</Li>
              <Li>Custom settings and preferences</Li>
            </ul>

            <p>
              <strong>Communication Data:</strong>
            </p>
            <ul>
              <Li>Customer support inquiries and correspondence</Li>
              <Li>Feedback and survey responses</Li>
              <Li>Email communications with us</Li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Information We Collect Automatically">
            <p>
              <strong>Usage Information:</strong>
            </p>
            <ul>
              <Li>Pages visited on t09n.com</Li>
              <Li>Features used (CAT Tool, MTPE, TQA, etc.)</Li>
              <Li>Time spent on platform</Li>
              <Li>Actions performed (uploads, translations, exports)</Li>
              <Li>Word count and usage statistics</Li>
              <Li>Error logs and debugging information</Li>
            </ul>

            <p>
              <strong>Device and Technical Information:</strong>
            </p>
            <ul>
              <Li>IP address</Li>
              <Li>Browser type and version</Li>
              <Li>Operating system</Li>
              <Li>Device type (desktop, mobile, tablet)</Li>
              <Li>Screen resolution</Li>
              <Li>Referring website</Li>
              <Li>Geographic location (city/country level based on IP)</Li>
            </ul>

            <p>
              <strong>Cookies and Similar Technologies:</strong>
            </p>
            <ul>
              <Li>Session cookies (essential for platform functionality)</Li>
              <Li>Authentication tokens</Li>
              <Li>Preference cookies (language settings, theme preferences)</Li>
              <Li>Analytics cookies (Google Analytics, if enabled)</Li>
            </ul>
          </SubSection>

          <SubSection title="2.3 Information from Third Parties">
            <p>We may receive information from:</p>
            <ul>
              <Li>
                <strong>Payment Processors:</strong> Transaction confirmations
                and payment status from Razorpay, Stripe, or other payment
                gateways
              </Li>
              <Li>
                <strong>Authentication Providers:</strong> If you sign in using
                Google or other OAuth providers, we receive basic profile
                information
              </Li>
              <Li>
                <strong>Analytics Services:</strong> Aggregated usage data from
                Google Analytics (if you have not opted out)
              </Li>
            </ul>
          </SubSection>
        </Section>

        {/* Section 3 */}
        <Section title="3. How We Use Your Information">
          <p>We use the collected information for the following purposes:</p>

          <SubSection title="3.1 To Provide and Improve Our Services">
            <ul>
              <Li>Create and manage your account</Li>
              <Li>
                Process your translations using our advanced translation
                technology
              </Li>
              <Li>Store and retrieve your Translation Memory and Glossaries</Li>
              <Li>Generate quality assessment reports</Li>
              <Li>
                Provide CAT Tool functionality (segmentation, editing,
                formatting preservation)
              </Li>
              <Li>
                Enable collaboration features (team accounts, comments, reviews)
              </Li>
              <Li>Calculate usage and enforce word quotas per plan</Li>
              <Li>Improve our translation algorithms and quality checks</Li>
            </ul>
          </SubSection>

          <SubSection title="3.2 To Process Payments and Billing">
            <ul>
              <Li>Process subscription payments</Li>
              <Li>Generate invoices and receipts</Li>
              <Li>Manage upgrades, downgrades, and cancellations</Li>
              <Li>Detect and prevent payment fraud</Li>
            </ul>
          </SubSection>

          <SubSection title="3.3 To Communicate with You">
            <ul>
              <Li>
                Send account-related emails (signup confirmations, password
                resets)
              </Li>
              <Li>Provide customer support and respond to inquiries</Li>
              <Li>Send service announcements and updates</Li>
              <Li>Notify you about new features and improvements</Li>
              <Li>
                Send marketing communications (only with your consent - you can
                opt out anytime)
              </Li>
            </ul>
          </SubSection>

          <SubSection title="3.4 To Ensure Security and Prevent Fraud">
            <ul>
              <Li>Detect and prevent unauthorized access</Li>
              <Li>Identify and stop abuse of our services</Li>
              <Li>Comply with legal obligations</Li>
              <Li>Monitor for suspicious activity</Li>
            </ul>
          </SubSection>

          <SubSection title="3.5 To Analyze and Improve Platform Performance">
            <ul>
              <Li>Understand how users interact with our platform</Li>
              <Li>Identify and fix bugs</Li>
              <Li>Optimize user experience</Li>
              <Li>Develop new features based on user behavior</Li>
            </ul>
          </SubSection>
        </Section>

        {/* Section 4 */}
        <Section title="4. How We Share Your Information">
          <HighlightBox>
            <p style={{ marginBottom: "8px" }}>
              <strong>Important: We Do NOT Sell Your Personal Data</strong>
            </p>
            <p style={{ margin: 0 }}>
              We will never sell, rent, or trade your personal information to
              third parties for their marketing purposes.
            </p>
          </HighlightBox>

          <p>
            We may share your information in the following limited
            circumstances:
          </p>

          <SubSection title="4.1 Third-Party Service Providers">
            <p>
              We work with trusted service providers who help us operate our
              platform. These providers have access to your information only to
              perform specific tasks on our behalf and are obligated to protect
              your data.
            </p>
          </SubSection>

          <SubSection title="4.2 Team Members and Collaborators">
            <p>If you use our Business plan or team features:</p>
            <ul>
              <Li>
                Team administrators can see team member names, email addresses,
                and usage statistics
              </Li>
              <Li>
                Collaborators on a project can see project content,
                translations, and comments
              </Li>
              <Li>
                Team members cannot see each other&apos;s personal documents
                unless explicitly shared
              </Li>
            </ul>
          </SubSection>

          <SubSection title="4.3 Legal Requirements">
            <p>
              We may disclose your information if required by law or in response
              to:
            </p>
            <ul>
              <Li>Court orders or legal processes</Li>
              <Li>Government or regulatory requests</Li>
              <Li>Protection of our legal rights</Li>
              <Li>Prevention of fraud or security threats</Li>
              <Li>Compliance with applicable laws and regulations</Li>
            </ul>
          </SubSection>

          <SubSection title="4.4 Business Transfers">
            <p>
              In the event of a merger, acquisition, or sale of all or a portion
              of our assets, your information may be transferred to the
              acquiring entity. We will notify you via email and/or prominent
              notice on our website before your information is transferred and
              becomes subject to a different privacy policy.
            </p>
          </SubSection>
        </Section>

        {/* Section 5 */}
        <Section title="5. Data Security">
          <p>
            We take the security of your data seriously and implement
            industry-standard measures to protect it:
          </p>

          <SubSection title="5.1 Technical Security Measures">
            <ul>
              <Li>
                <strong>Encryption in Transit:</strong> All data transmitted
                between your browser and our servers is encrypted using TLS 1.3
                (HTTPS)
              </Li>
              <Li>
                <strong>Encryption at Rest:</strong> All stored data (documents,
                translations, databases) is encrypted using AES-256 encryption
              </Li>
              <Li>
                <strong>Password Security:</strong> Passwords are hashed using
                bcrypt with salt (we never store plain-text passwords)
              </Li>
              <Li>
                <strong>Secure Authentication:</strong> Session tokens with
                expiration, secure cookie flags
              </Li>
              <Li>
                <strong>Database Security:</strong> Access restricted to
                authorized personnel only, with role-based access control
              </Li>
              <Li>
                <strong>File Storage Security:</strong> Uploaded files stored in
                secure cloud storage with access controls
              </Li>
            </ul>
          </SubSection>

          <SubSection title="5.2 Organizational Security Measures">
            <ul>
              <Li>Regular security audits and vulnerability assessments</Li>
              <Li>Employee access to data on a need-to-know basis only</Li>
              <Li>
                Confidentiality agreements with all employees and contractors
              </Li>
              <Li>Incident response plan for security breaches</Li>
              <Li>Regular backups with disaster recovery procedures</Li>
            </ul>
          </SubSection>

          <SubSection title="5.3 Your Role in Security">
            <p>You can help protect your account by:</p>
            <ul>
              <Li>Using a strong, unique password</Li>
              <Li>Not sharing your password with others</Li>
              <Li>Logging out after using shared computers</Li>
              <Li>Reporting suspicious activity immediately</Li>
              <Li>Keeping your contact information up to date</Li>
            </ul>
          </SubSection>

          <HighlightBox>
            <p style={{ marginBottom: "8px" }}>
              <strong>Data Breach Notification</strong>
            </p>
            <p style={{ margin: 0 }}>
              In the unlikely event of a data breach that affects your personal
              information, we will notify you via email within 72 hours of
              becoming aware of the breach, as required by applicable laws.
            </p>
          </HighlightBox>
        </Section>

        {/* Section 6 */}
        <Section title="6. Data Retention">
          <p>
            We retain your information for as long as necessary to provide our
            services and comply with legal obligations:
          </p>

          <SubSection title="6.1 Active Accounts">
            <ul>
              <Li>
                <strong>Account Information:</strong> Retained while your
                account is active
              </Li>
              <Li>
                <strong>Translation Projects:</strong> Retained indefinitely
                unless you delete them
              </Li>
              <Li>
                <strong>Translation Memory:</strong> Retained indefinitely
                unless you delete it
              </Li>
              <Li>
                <strong>Glossaries:</strong> Retained indefinitely unless you
                delete them
              </Li>
              <Li>
                <strong>Usage Logs:</strong> Retained for 12 months for billing
                and support purposes
              </Li>
            </ul>
          </SubSection>

          <SubSection title="6.2 Closed or Inactive Accounts">
            <ul>
              <Li>
                <strong>Account Deletion:</strong> When you close your account,
                we delete your personal information within 30 days
              </Li>
              <Li>
                <strong>Anonymized Data:</strong> We may retain anonymized usage
                statistics for analytical purposes
              </Li>
              <Li>
                <strong>Billing Records:</strong> Retained for 7 years as
                required by tax and accounting regulations
              </Li>
              <Li>
                <strong>Legal Holds:</strong> If data is subject to legal
                proceedings, it will be retained until the matter is resolved
              </Li>
            </ul>
          </SubSection>

          <SubSection title="6.3 Deleted Content">
            <p>When you delete a project, document, or glossary:</p>
            <ul>
              <Li>
                It is immediately removed from your account and inaccessible
              </Li>
              <Li>It may remain in our backup systems for up to 30 days</Li>
              <Li>After 30 days, it is permanently deleted from all systems</Li>
            </ul>
          </SubSection>
        </Section>

        {/* Section 7 */}
        <Section title="7. Your Privacy Rights">
          <p>You have the following rights regarding your personal data:</p>

          <SubSection title="7.1 Access and Portability">
            <ul>
              <Li>
                <strong>Right to Access:</strong> You can request a copy of all
                personal data we hold about you
              </Li>
              <Li>
                <strong>Data Export:</strong> You can export your translation
                projects, Translation Memory, and glossaries at any time from
                your account settings
              </Li>
              <Li>
                <strong>Response Time:</strong> We will respond to access
                requests within 30 days
              </Li>
            </ul>
          </SubSection>

          <SubSection title="7.2 Correction and Updating">
            <ul>
              <Li>
                <strong>Right to Correction:</strong> You can update your
                account information at any time from your profile settings
              </Li>
              <Li>
                <strong>Assistance:</strong> If you need help updating
                information, contact us at{" "}
                <a href="mailto:support@t09n.com" style={linkStyle}>
                  support@t09n.com
                </a>
              </Li>
            </ul>
          </SubSection>

          <SubSection title="7.3 Deletion">
            <ul>
              <Li>
                <strong>Right to Deletion:</strong> You can request deletion of
                your account and all associated data
              </Li>
              <Li>
                <strong>Self-Service:</strong> Account deletion available in
                Settings → Account → Delete Account
              </Li>
              <Li>
                <strong>Exceptions:</strong> We may retain certain data if
                required by law or for legitimate business purposes (e.g.,
                billing records)
              </Li>
            </ul>
          </SubSection>

          <SubSection title="7.4 Objection and Restriction">
            <ul>
              <Li>
                <strong>Right to Object:</strong> You can object to certain
                types of data processing (e.g., marketing communications)
              </Li>
              <Li>
                <strong>Right to Restriction:</strong> You can request that we
                limit how we use your data
              </Li>
            </ul>
          </SubSection>

          <SubSection title="7.5 Withdrawal of Consent">
            <ul>
              <Li>
                <strong>Marketing Emails:</strong> Unsubscribe using the link in
                any marketing email
              </Li>
              <Li>
                <strong>Analytics Cookies:</strong> Opt out via browser settings
                or our cookie consent tool
              </Li>
            </ul>
          </SubSection>

          <SubSection title="7.6 How to Exercise Your Rights">
            <p>To exercise any of these rights, contact us at:</p>
            <ContactBox>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@t09n.com" style={linkStyle}>
                  privacy@t09n.com
                </a>
              </p>
              <p>
                <strong>Subject Line:</strong> &ldquo;Privacy Rights Request -
                [Your Request Type]&rdquo;
              </p>
              <p>
                <strong>Required Information:</strong> Your name, email address,
                and specific request
              </p>
            </ContactBox>
            <p>
              We will verify your identity before processing your request and
              respond within 30 days.
            </p>
          </SubSection>
        </Section>

        {/* Section 8 */}
        <Section title="8. Cookies and Tracking Technologies">
          <SubSection title="8.1 Types of Cookies We Use">
            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  margin: "16px 0",
                }}
              >
                <thead>
                  <tr>
                    <Th>Cookie Type</Th>
                    <Th>Purpose</Th>
                    <Th>Duration</Th>
                    <Th>Required</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>Essential Cookies</Td>
                    <Td>Authentication, security, platform functionality</Td>
                    <Td>Session or 30 days</Td>
                    <Td>Yes</Td>
                  </tr>
                  <tr>
                    <Td>Preference Cookies</Td>
                    <Td>Remember your settings (language, theme)</Td>
                    <Td>1 year</Td>
                    <Td>No</Td>
                  </tr>
                  <tr>
                    <Td>Analytics Cookies</Td>
                    <Td>Understand how users interact with platform</Td>
                    <Td>2 years</Td>
                    <Td>No</Td>
                  </tr>
                  <tr>
                    <Td>Marketing Cookies</Td>
                    <Td>Track ad campaign effectiveness</Td>
                    <Td>90 days</Td>
                    <Td>No</Td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection title="8.2 Managing Cookies">
            <p>You can control cookies through:</p>
            <ul>
              <Li>
                <strong>Browser Settings:</strong> Most browsers allow you to
                refuse or delete cookies
              </Li>
              <Li>
                <strong>Cookie Consent Tool:</strong> Manage your preferences
                via our cookie banner
              </Li>
              <Li>
                <strong>Opt-Out Links:</strong> Google Analytics opt-out:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </Li>
            </ul>
            <p>
              <strong>Note:</strong> Disabling essential cookies may prevent you
              from using certain features of t09n.com.
            </p>
          </SubSection>
        </Section>

        {/* Section 9 */}
        <Section title="9. Third-Party Links">
          <p>
            Our platform may contain links to third-party websites, plugins, or
            services (e.g., payment processors, social media). We are not
            responsible for the privacy practices of these third parties. We
            encourage you to read their privacy policies before providing any
            information.
          </p>
        </Section>

        {/* Section 10 */}
        <Section title="10. Children's Privacy">
          <p>
            t09n.com is not intended for use by individuals under the age of 18.
            We do not knowingly collect personal information from children under
            18.
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided
            us with personal information, please contact us at{" "}
            <a href="mailto:privacy@t09n.com" style={linkStyle}>
              privacy@t09n.com
            </a>
            , and we will delete the information immediately.
          </p>
        </Section>

        {/* Section 11 */}
        <Section title="11. International Data Transfers">
          <p>
            t09n.com is operated from India. If you are accessing our services
            from outside India, please be aware that your information may be
            transferred to, stored, and processed in India and other countries
            where our service providers operate.
          </p>
          <p>
            By using t09n.com, you consent to the transfer of your information
            to India and other countries, which may have different data
            protection laws than your country of residence.
          </p>
          <p>
            We ensure that all data transfers comply with applicable data
            protection laws and take appropriate safeguards to protect your
            information.
          </p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Your California Privacy Rights (CCPA)">
          <p>
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act (CCPA):
          </p>
          <ul>
            <Li>
              <strong>Right to Know:</strong> What personal information we
              collect, use, and share
            </Li>
            <Li>
              <strong>Right to Delete:</strong> Request deletion of your
              personal information
            </Li>
            <Li>
              <strong>Right to Opt-Out:</strong> Opt out of the sale of personal
              information (Note: We do not sell personal information)
            </Li>
            <Li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising your rights
            </Li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@t09n.com" style={linkStyle}>
              privacy@t09n.com
            </a>{" "}
            with &ldquo;CCPA Request&rdquo; in the subject line.
          </p>
        </Section>

        {/* Section 13 */}
        <Section title="13. European Privacy Rights (GDPR)">
          <p>
            If you are in the European Economic Area (EEA), you have rights
            under the General Data Protection Regulation (GDPR):
          </p>
          <ul>
            <Li>
              <strong>Legal Basis for Processing:</strong> We process your data
              based on:
              <ul style={{ marginTop: "8px", marginLeft: "24px" }}>
                <Li>Contract performance (to provide our services)</Li>
                <Li>
                  Legitimate interests (to improve and secure our platform)
                </Li>
                <Li>Consent (for marketing communications)</Li>
                <Li>Legal obligations (tax and accounting requirements)</Li>
              </ul>
            </Li>
            <Li>
              <strong>Data Protection Officer:</strong> For GDPR-related
              inquiries, contact our DPO at{" "}
              <a href="mailto:dpo@t09n.com" style={linkStyle}>
                dpo@t09n.com
              </a>
            </Li>
            <Li>
              <strong>Right to Lodge a Complaint:</strong> You have the right to
              lodge a complaint with a supervisory authority in your country
            </Li>
          </ul>
        </Section>

        {/* Section 14 */}
        <Section title="14. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors.
          </p>
          <p>When we make changes:</p>
          <ul>
            <Li>
              We will update the &ldquo;Last Updated&rdquo; date at the top of
              this policy
            </Li>
            <Li>
              For material changes, we will notify you via email and/or a
              prominent notice on our platform
            </Li>
            <Li>
              You will have 30 days to review the changes before they take
              effect
            </Li>
            <Li>
              Your continued use of t09n.com after the effective date
              constitutes acceptance of the updated policy
            </Li>
          </ul>
          <p>
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we protect your information.
          </p>
        </Section>

        {/* Section 15 */}
        <Section title="15. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <ContactBox>
            <p>
              <strong>Company Name:</strong> t09n.com (operated by LOCALIZATION
              LOUNGE)
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@t09n.com" style={linkStyle}>
                privacy@t09n.com
              </a>
            </p>
            <p>
              <strong>Support Email:</strong>{" "}
              <a href="mailto:support@t09n.com" style={linkStyle}>
                support@t09n.com
              </a>
            </p>
            <p>
              <strong>Data Protection Officer:</strong>{" "}
              <a href="mailto:dpo@t09n.com" style={linkStyle}>
                dpo@t09n.com
              </a>
            </p>
            <p>
              <strong>Response Time:</strong> We aim to respond to all inquiries
              within 48 hours (business days)
            </p>
          </ContactBox>
        </Section>

        {/* Section 16 */}
        <Section title="16. Consent">
          <p>
            By using t09n.com, you acknowledge that you have read and understood
            this Privacy Policy and consent to the collection, use, and
            disclosure of your information as described herein.
          </p>
          <p>
            If you do not agree with this Privacy Policy, please do not use our
            services.
          </p>
        </Section>

        {/* Page Footer */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "20px",
            borderTop: "2px solid #e5e7eb",
            color: "#6b7280",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {/* Business identity */}
          <p
            style={{ marginBottom: "8px", fontSize: "13px", color: "#9ca3af" }}
          >
            Operated by{" "}
            <strong style={{ color: "#6b7280" }}>LOCALIZATION LOUNGE</strong>
            &ensp;&middot;&ensp; GSTIN:{" "}
            <strong style={{ color: "#6b7280" }}>24BSWPM3389R1ZG</strong>
            &ensp;&middot;&ensp; Support:{" "}
            <a href="mailto:support@t09n.com" style={linkStyle}>
              support@t09n.com
            </a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            &copy; {year} t09n.com. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            <a href="/terms" style={linkStyle}>
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="/privacy" style={linkStyle}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/cookie-policy" style={linkStyle}>
              Cookie Policy
            </a>{" "}
            |{" "}
            <a href="/contact" style={linkStyle}>
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────────────── */

const linkStyle: React.CSSProperties = {
  color: "#667eea",
  textDecoration: "none",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: "0" }}>
      <h2
        className="pp-h2"
        style={{
          fontSize: "24px",
          color: "#1f2937",
          marginTop: "40px",
          marginBottom: "16px",
          paddingBottom: "8px",
          borderBottom: "2px solid #e5e7eb",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        style={{
          fontSize: "18px",
          color: "#374151",
          marginTop: "24px",
          marginBottom: "12px",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#f0f4ff",
        borderLeft: "4px solid #667eea",
        padding: "16px",
        margin: "24px 0",
        borderRadius: "4px",
        fontSize: "15px",
        lineHeight: 1.6,
        color: "#4b5563",
      }}
    >
      {children}
    </div>
  );
}

function ContactBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        padding: "20px",
        borderRadius: "8px",
        margin: "32px 0",
        fontSize: "15px",
        lineHeight: 1.7,
        color: "#4b5563",
      }}
    >
      {children}
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        marginBottom: "8px",
        color: "#4b5563",
        fontSize: "15px",
        lineHeight: 1.6,
      }}
    >
      {children}
    </li>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        padding: "12px",
        textAlign: "left",
        borderBottom: "1px solid #e5e7eb",
        background: "#f9fafb",
        fontWeight: 600,
        color: "#111827",
        fontSize: "14px",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "12px",
        textAlign: "left",
        borderBottom: "1px solid #e5e7eb",
        color: "#4b5563",
        fontSize: "14px",
      }}
    >
      {children}
    </td>
  );
}
