/* ─── Terms of Service Page ─────────────────────────────────────────── */

export default function TermsOfService() {
  const year = new Date().getFullYear();

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <style>{`
        .tos-body p {
          margin-bottom: 16px;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.6;
        }
        .tos-body ul, .tos-body ol {
          margin-bottom: 16px;
          margin-left: 24px;
        }
        .tos-body strong {
          color: #111827;
          font-weight: 600;
        }
        .tos-body a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .tos-h1 { font-size: 28px !important; }
          .tos-h2 { font-size: 20px !important; }
          .tos-container { padding: 20px 16px !important; }
        }
      `}</style>
      <div
        className="tos-container tos-body"
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
            data-ocid="tos.back_link"
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
            className="tos-h1"
            style={{
              fontSize: "36px",
              color: "#111827",
              marginBottom: "10px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Terms of Service
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

        {/* Welcome highlight box */}
        <HighlightBox>
          <p style={{ marginBottom: "8px" }}>
            <strong>Welcome to t09n.com!</strong>
          </p>
          <p style={{ marginBottom: "8px" }}>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
            and use of t09n.com, our professional translation platform. Please
            read these Terms carefully before using our services.
          </p>
          <p style={{ margin: 0 }}>
            <strong>
              By using t09n.com, you agree to be bound by these Terms.
            </strong>{" "}
            If you do not agree with any part of these Terms, you may not use
            our services.
          </p>
        </HighlightBox>

        {/* Section 1 */}
        <TosSection title="1. Acceptance of Terms">
          <p>
            By accessing or using t09n.com (the &ldquo;Platform&rdquo;,
            &ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;), you (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or
            &ldquo;your&rdquo;) agree to be bound by:
          </p>
          <ul>
            <Li>These Terms of Service</Li>
            <Li>
              Our{" "}
              <a href="/privacy" style={linkStyle}>
                Privacy Policy
              </a>
            </Li>
            <Li>
              Our{" "}
              <a href="/acceptable-use-policy" style={linkStyle}>
                Acceptable Use Policy
              </a>
            </Li>
            <Li>
              Any additional terms applicable to specific features or services
            </Li>
          </ul>
          <p>
            These Terms constitute a legally binding agreement between you and
            t09n.com (operated by LOCALIZATION LOUNGE, a company registered in
            India).
          </p>

          <SubSection title="1.1 Eligibility">
            <p>To use t09n.com, you must:</p>
            <ul>
              <Li>Be at least 18 years of age</Li>
              <Li>Have the legal capacity to enter into a binding contract</Li>
              <Li>
                Not be prohibited from using the Service under applicable laws
              </Li>
              <Li>Provide accurate and complete registration information</Li>
            </ul>
            <p>
              If you are using the Service on behalf of a company or
              organization, you represent that you have the authority to bind
              that entity to these Terms.
            </p>
          </SubSection>

          <SubSection title="1.2 Modification of Terms">
            <p>
              We reserve the right to modify these Terms at any time. When we
              do:
            </p>
            <ul>
              <Li>
                We will update the &ldquo;Last Updated&rdquo; date at the top of
                this page
              </Li>
              <Li>
                For material changes, we will notify you via email at least 30
                days in advance
              </Li>
              <Li>
                Continued use of the Service after changes take effect
                constitutes acceptance of the modified Terms
              </Li>
              <Li>
                If you do not agree to the modified Terms, you must stop using
                the Service
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 2 */}
        <TosSection title="2. Description of Service">
          <p>
            t09n.com is a cloud-based translation platform that provides the
            following services:
          </p>

          <SubSection title="2.1 Core Features">
            <ul>
              <Li>
                <strong>Advanced Translation:</strong> Professional translation
                using our proprietary dual-layer translation system
              </Li>
              <Li>
                <strong>CAT Tool (Computer-Assisted Translation):</strong>{" "}
                Professional translation workbench with segmentation, editing,
                and formatting preservation
              </Li>
              <Li>
                <strong>Translation Enhancement:</strong> Refinement and
                optimization of translated content
              </Li>
              <Li>
                <strong>Translation Quality Assessment (TQA):</strong> Automated
                quality checks and scoring reports
              </Li>
              <Li>
                <strong>Translation Memory (TM):</strong> Storage and reuse of
                previously translated segments
              </Li>
              <Li>
                <strong>Glossary/Term Base:</strong> Terminology management for
                consistent translations
              </Li>
              <Li>
                <strong>Project Management:</strong> Organization and tracking
                of translation projects
              </Li>
              <Li>
                <strong>File Format Support:</strong> DOCX, PDF, XLSX, TXT file
                uploads and exports
              </Li>
              <Li>
                <strong>Live Preview:</strong> Real-time preview of formatted
                translations
              </Li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Additional Features (Plan-Dependent)">
            <ul>
              <Li>
                <strong>Team Collaboration:</strong> Multi-user access with
                role-based permissions (Business plan)
              </Li>
              <Li>
                <strong>Advanced Analytics:</strong> Usage statistics and
                performance metrics (Professional and Business plans)
              </Li>
              <Li>
                <strong>Priority Support:</strong> Expedited customer service
                (Professional and Business plans)
              </Li>
            </ul>
          </SubSection>

          <SubSection title="2.3 Service Availability">
            <p>While we strive to provide uninterrupted service:</p>
            <ul>
              <Li>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo;
              </Li>
              <Li>We do not guarantee 100% uptime</Li>
              <Li>We may perform scheduled maintenance with advance notice</Li>
              <Li>
                We may suspend or terminate the Service for emergency
                maintenance, security issues, or legal compliance
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 3 */}
        <TosSection title="3. Account Registration and Security">
          <SubSection title="3.1 Account Creation">
            <p>
              To use certain features of t09n.com, you must create an account by
              providing:
            </p>
            <ul>
              <Li>Valid email address</Li>
              <Li>Secure password</Li>
              <Li>Full name</Li>
              <Li>Other information as requested during registration</Li>
            </ul>
            <p>You agree to:</p>
            <ul>
              <Li>Provide accurate, current, and complete information</Li>
              <Li>Update your information to keep it accurate and current</Li>
              <Li>Maintain the confidentiality of your password</Li>
              <Li>Not share your account credentials with others</Li>
              <Li>
                Immediately notify us of any unauthorized use of your account
              </Li>
            </ul>
          </SubSection>

          <SubSection title="3.2 Account Security">
            <p>
              <strong>
                You are responsible for all activities that occur under your
                account.
              </strong>
            </p>
            <p>We are not liable for any loss or damage arising from:</p>
            <ul>
              <Li>Your failure to maintain account security</Li>
              <Li>
                Unauthorized access resulting from your actions or omissions
              </Li>
              <Li>Sharing of credentials with third parties</Li>
            </ul>
          </SubSection>

          <SubSection title="3.3 One Account Per User">
            <p>
              Each user may maintain only one account unless explicitly
              authorized by us. Creating multiple accounts to circumvent usage
              limits, pricing, or restrictions is prohibited and may result in
              account termination.
            </p>
          </SubSection>
        </TosSection>

        {/* Section 4 */}
        <TosSection title="4. Subscription Plans and Pricing">
          <SubSection title="4.1 Available Plans">
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
                    <Th>Plan</Th>
                    <Th>Price</Th>
                    <Th>Word Quota</Th>
                    <Th>Key Features</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>Free</Td>
                    <Td>₹0/month</Td>
                    <Td>1,000 words/month</Td>
                    <Td>Basic translation, CAT tool, TQA</Td>
                  </tr>
                  <tr>
                    <Td>Pay-as-you-go (PAYG)</Td>
                    <Td>₹0.10/word</Td>
                    <Td>Unlimited</Td>
                    <Td>No monthly commitment</Td>
                  </tr>
                  <tr>
                    <Td>Starter</Td>
                    <Td>₹799/month</Td>
                    <Td>25,000 words/month</Td>
                    <Td>All core features</Td>
                  </tr>
                  <tr>
                    <Td>Professional</Td>
                    <Td>₹1,499/month</Td>
                    <Td>100,000 words/month</Td>
                    <Td>Priority support, advanced analytics</Td>
                  </tr>
                  <tr>
                    <Td>Business</Td>
                    <Td>₹4,999/month</Td>
                    <Td>500,000 words/month</Td>
                    <Td>Team features (4 members), priority support</Td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection title="4.2 Billing and Payment">
            <p>
              <strong>
                Subscription Plans (Starter, Professional, Business):
              </strong>
            </p>
            <ul>
              <Li>Billed monthly in advance</Li>
              <Li>Automatic renewal unless cancelled</Li>
              <Li>Payment processed on the same date each month</Li>
              <Li>Word quota resets on your billing date</Li>
              <Li>Unused quota does not roll over to the next month</Li>
            </ul>
            <p>
              <strong>Pay-as-you-go (PAYG):</strong>
            </p>
            <ul>
              <Li>Charged ₹0.10 per word translated</Li>
              <Li>No monthly commitment or recurring charges</Li>
              <Li>Payment due immediately upon translation</Li>
            </ul>
          </SubSection>

          <SubSection title="4.3 Payment Methods">
            <p>We accept:</p>
            <ul>
              <Li>Credit cards (Visa, Mastercard, American Express)</Li>
              <Li>Debit cards</Li>
              <Li>UPI (Unified Payments Interface)</Li>
              <Li>Net banking</Li>
              <Li>Other methods supported by our payment processors</Li>
            </ul>
          </SubSection>

          <SubSection title="4.4 Taxes">
            <p>
              All prices are exclusive of applicable taxes (GST, VAT, etc.). You
              are responsible for paying all taxes associated with your
              purchase. We will add applicable taxes to your invoice based on
              your billing location.
            </p>
          </SubSection>

          <SubSection title="4.5 Price Changes">
            <p>
              We reserve the right to change our pricing at any time. For
              existing subscribers:
            </p>
            <ul>
              <Li>
                Price changes will not apply to your current billing cycle
              </Li>
              <Li>
                We will notify you at least 30 days before any price increase
              </Li>
              <Li>
                You may cancel your subscription before the new price takes
                effect
              </Li>
              <Li>
                Continued use after the price change constitutes acceptance
              </Li>
            </ul>
          </SubSection>

          <SubSection title="4.6 Overage Charges">
            <p>If you exceed your monthly word quota on a subscription plan:</p>
            <ul>
              <Li>
                You will be automatically charged ₹0.10 per additional word
              </Li>
              <Li>Overage charges appear on your next invoice</Li>
              <Li>
                You may upgrade to a higher plan at any time to avoid overage
                charges
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 5 */}
        <TosSection title="5. Free Trial and Promotions">
          <SubSection title="5.1 Free Plan">
            <ul>
              <Li>The Free plan provides 1,000 words per month at no cost</Li>
              <Li>No credit card required to sign up</Li>
              <Li>Access to core features only</Li>
              <Li>
                We reserve the right to modify or discontinue the Free plan at
                any time
              </Li>
            </ul>
          </SubSection>

          <SubSection title="5.2 Promotional Offers">
            <ul>
              <Li>Promotional discounts may be offered from time to time</Li>
              <Li>
                Promotions are subject to specific terms and expiration dates
              </Li>
              <Li>One promotion per user unless otherwise stated</Li>
              <Li>Promotions cannot be combined with other offers</Li>
              <Li>
                We reserve the right to modify or cancel promotions at any time
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 6 */}
        <TosSection title="6. Cancellation and Refunds">
          <SubSection title="6.1 Cancellation by You">
            <p>
              <strong>Subscription Plans:</strong>
            </p>
            <ul>
              <Li>
                You may cancel your subscription at any time from your account
                settings
              </Li>
              <Li>
                Cancellation takes effect at the end of your current billing
                period
              </Li>
              <Li>
                You will retain access to paid features until the end of the
                billing period
              </Li>
              <Li>No refunds for partial months or unused word quota</Li>
            </ul>
            <p>
              <strong>How to Cancel:</strong>
            </p>
            <ol>
              <Li>Log in to your account</Li>
              <Li>Go to Settings → Billing</Li>
              <Li>Click &ldquo;Cancel Subscription&rdquo;</Li>
              <Li>Confirm cancellation</Li>
            </ol>
          </SubSection>

          <SubSection title="6.2 Refund Policy">
            <WarningBox>
              <p style={{ marginBottom: "8px" }}>
                <strong>Important: All sales are final.</strong>
              </p>
              <p style={{ marginBottom: "8px" }}>
                We do not offer refunds for:
              </p>
              <ul>
                <Li>Partial months of service</Li>
                <Li>Unused word quota</Li>
                <Li>Change of mind</Li>
                <Li>Dissatisfaction with translation quality (subjective)</Li>
              </ul>
            </WarningBox>
            <p>
              <strong>Exceptions:</strong>
            </p>
            <p>We may provide refunds at our sole discretion in cases of:</p>
            <ul>
              <Li>
                Technical issues that prevent you from using the Service for an
                extended period
              </Li>
              <Li>Duplicate charges or billing errors</Li>
              <Li>Unauthorized charges (with proof)</Li>
            </ul>
            <p>
              To request a refund, contact us at{" "}
              <a href="mailto:billing@t09n.com" style={linkStyle}>
                billing@t09n.com
              </a>{" "}
              with your account details and reason for the request. We will
              review and respond within 7 business days.
            </p>
          </SubSection>

          <SubSection title="6.3 Cancellation by Us">
            <p>We reserve the right to suspend or terminate your account if:</p>
            <ul>
              <Li>You violate these Terms</Li>
              <Li>Your payment method fails or is declined</Li>
              <Li>You engage in fraudulent or illegal activities</Li>
              <Li>You abuse or misuse the Service</Li>
              <Li>Required by law or legal process</Li>
            </ul>
            <p>
              In case of termination for cause, no refunds will be provided.
            </p>
          </SubSection>
        </TosSection>

        {/* Section 7 */}
        <TosSection title="7. Acceptable Use Policy">
          <SubSection title="7.1 Permitted Use">
            <p>You may use t09n.com for:</p>
            <ul>
              <Li>Professional translation services</Li>
              <Li>Personal translation projects</Li>
              <Li>Educational purposes</Li>
              <Li>Commercial use (with appropriate subscription)</Li>
            </ul>
          </SubSection>

          <SubSection title="7.2 Prohibited Use">
            <ImportantBox>
              <p style={{ marginBottom: "8px" }}>
                <strong>You may NOT use t09n.com to:</strong>
              </p>
              <ul>
                <Li>
                  <strong>
                    Translate illegal, harmful, or offensive content:
                  </strong>
                  <ul style={{ marginTop: "8px", marginLeft: "24px" }}>
                    <Li>Child sexual abuse material (CSAM)</Li>
                    <Li>
                      Content that promotes violence, terrorism, or hate speech
                    </Li>
                    <Li>Content that violates intellectual property rights</Li>
                    <Li>Spam, phishing, or malicious content</Li>
                  </ul>
                </Li>
                <Li>
                  <strong>Abuse the Service:</strong>
                  <ul style={{ marginTop: "8px", marginLeft: "24px" }}>
                    <Li>Automated scraping or data harvesting</Li>
                    <Li>
                      Reverse engineering or attempting to extract source code
                    </Li>
                    <Li>
                      Creating fake accounts or circumventing usage limits
                    </Li>
                    <Li>
                      Reselling access to the Service without authorization
                    </Li>
                  </ul>
                </Li>
                <Li>
                  <strong>Interfere with the Service:</strong>
                  <ul style={{ marginTop: "8px", marginLeft: "24px" }}>
                    <Li>
                      Attempting to hack, breach security, or gain unauthorized
                      access
                    </Li>
                    <Li>Introducing viruses, malware, or harmful code</Li>
                    <Li>
                      Overloading servers or causing performance degradation
                    </Li>
                  </ul>
                </Li>
                <Li>
                  <strong>Violate laws or regulations:</strong>
                  <ul style={{ marginTop: "8px", marginLeft: "24px" }}>
                    <Li>Money laundering, fraud, or financial crimes</Li>
                    <Li>Export control or sanctions violations</Li>
                    <Li>Privacy or data protection law violations</Li>
                  </ul>
                </Li>
              </ul>
            </ImportantBox>
            <p>
              <strong>Consequences of Prohibited Use:</strong>
            </p>
            <ul>
              <Li>Immediate account suspension or termination</Li>
              <Li>Deletion of all content and data</Li>
              <Li>No refunds</Li>
              <Li>Legal action if warranted</Li>
              <Li>Reporting to law enforcement authorities</Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 8 */}
        <TosSection title="8. Intellectual Property Rights">
          <SubSection title="8.1 Our Intellectual Property">
            <p>
              t09n.com and all its content, features, and functionality
              (including but not limited to software, code, design, text,
              graphics, logos, icons, images, and trademarks) are owned by us or
              our licensors and are protected by:
            </p>
            <ul>
              <Li>Copyright laws</Li>
              <Li>Trademark laws</Li>
              <Li>Patent laws</Li>
              <Li>Trade secret laws</Li>
              <Li>Other intellectual property rights</Li>
            </ul>
            <p>You may not:</p>
            <ul>
              <Li>
                Copy, modify, or create derivative works of our software or
                content
              </Li>
              <Li>Reverse engineer, decompile, or disassemble the Service</Li>
              <Li>
                Remove or alter any copyright, trademark, or proprietary notices
              </Li>
              <Li>
                Use our branding, logos, or trademarks without written
                permission
              </Li>
            </ul>
          </SubSection>

          <SubSection title="8.2 Your Content">
            <p>
              <strong>Ownership:</strong> You retain all ownership rights to the
              content you upload to t09n.com, including:
            </p>
            <ul>
              <Li>Source documents</Li>
              <Li>Translations you create</Li>
              <Li>Glossaries and Translation Memory</Li>
              <Li>Project files</Li>
            </ul>
            <p>
              <strong>License to Us:</strong> By uploading content to t09n.com,
              you grant us a limited, non-exclusive, worldwide license to:
            </p>
            <ul>
              <Li>
                Store, process, and display your content to provide the Service
              </Li>
              <Li>Make backups of your content for data protection</Li>
              <Li>
                Use your content to improve our translation technology and
                Service quality (anonymized and aggregated only)
              </Li>
            </ul>
            <p>
              <strong>Important Clarification:</strong>
            </p>
            <ul>
              <Li>We do NOT claim ownership of your content</Li>
              <Li>
                We do NOT use your specific translations to train our
                proprietary systems without your consent
              </Li>
              <Li>
                We do NOT share your content with third parties except as
                necessary to provide the Service
              </Li>
            </ul>
          </SubSection>

          <SubSection title="8.3 System-Generated Translations">
            <p>Translations generated by our proprietary translation system:</p>
            <ul>
              <Li>Are provided to you for your use</Li>
              <Li>May not be copyrightable as they are machine-generated</Li>
              <Li>
                Should be reviewed and edited by a human translator for
                professional use
              </Li>
              <Li>
                Are your responsibility to verify for accuracy and
                appropriateness
              </Li>
            </ul>
          </SubSection>

          <SubSection title="8.4 Copyright Infringement">
            <p>
              If you believe content on t09n.com infringes your copyright,
              please contact us at{" "}
              <a href="mailto:legal@t09n.com" style={linkStyle}>
                legal@t09n.com
              </a>{" "}
              with:
            </p>
            <ul>
              <Li>Description of the copyrighted work</Li>
              <Li>Location of the infringing content</Li>
              <Li>Your contact information</Li>
              <Li>Statement of good faith belief</Li>
              <Li>
                Statement under penalty of perjury that you are authorized to
                act
              </Li>
              <Li>Electronic or physical signature</Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 9 */}
        <TosSection title="9. Data and Privacy">
          <SubSection title="9.1 Privacy Policy">
            <p>
              Our collection and use of personal information is governed by our{" "}
              <a href="/privacy" style={linkStyle}>
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference. Please
              review the Privacy Policy to understand our data practices.
            </p>
          </SubSection>

          <SubSection title="9.2 Data Security">
            <p>
              We implement industry-standard security measures to protect your
              data, including:
            </p>
            <ul>
              <Li>Encryption in transit (TLS 1.3 / HTTPS)</Li>
              <Li>Encryption at rest (AES-256)</Li>
              <Li>Secure password hashing (bcrypt)</Li>
              <Li>Regular security audits</Li>
              <Li>Access controls and authentication</Li>
            </ul>
            <p>
              However, no method of transmission or storage is 100% secure. We
              cannot guarantee absolute security of your data.
            </p>
          </SubSection>

          <SubSection title="9.3 Data Backup and Retention">
            <ul>
              <Li>We perform regular backups of your data</Li>
              <Li>Backups are retained for 30 days</Li>
              <Li>You are responsible for maintaining your own backups</Li>
              <Li>We are not liable for data loss</Li>
            </ul>
          </SubSection>

          <SubSection title="9.4 Third-Party Translation Processing">
            <p>
              When you use our translation features, your text is processed by
              our proprietary translation system. By using our translation
              services, you acknowledge that:
            </p>
            <ul>
              <Li>
                Your text will be processed through our secure translation
                infrastructure
              </Li>
              <Li>
                We use industry-standard security protocols to protect your data
                during processing
              </Li>
              <Li>
                Your translations are not used to train our systems without your
                explicit consent
              </Li>
              <Li>
                Data is processed in compliance with applicable privacy laws and
                regulations
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 10 */}
        <TosSection title="10. Disclaimer of Warranties">
          <ImportantBox>
            <p style={{ margin: 0 }}>
              <strong>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND.
              </strong>
            </p>
          </ImportantBox>

          <p>
            To the fullest extent permitted by law, we disclaim all warranties,
            express or implied, including but not limited to:
          </p>
          <ul>
            <Li>
              <strong>Warranties of merchantability:</strong> The Service may
              not meet your specific requirements
            </Li>
            <Li>
              <strong>Warranties of fitness for a particular purpose:</strong>{" "}
              We do not guarantee the Service will be suitable for your intended
              use
            </Li>
            <Li>
              <strong>Warranties of non-infringement:</strong> We do not
              guarantee that use of the Service will not infringe third-party
              rights
            </Li>
            <Li>
              <strong>Warranties of accuracy:</strong> Machine-generated
              translations may contain errors, inaccuracies, or inappropriate
              content
            </Li>
            <Li>
              <strong>
                Warranties of uninterrupted or error-free operation:
              </strong>{" "}
              The Service may experience downtime, bugs, or technical issues
            </Li>
          </ul>

          <SubSection title="10.1 Translation Quality Disclaimer">
            <WarningBox>
              <p style={{ marginBottom: "8px" }}>
                <strong>Important Notice About Automated Translations:</strong>
              </p>
              <p style={{ marginBottom: "8px" }}>
                Machine-generated translations are NOT perfect and should be
                reviewed by a qualified human translator before use in
                professional, legal, medical, or critical contexts.
              </p>
              <p style={{ marginBottom: "8px" }}>We do not guarantee:</p>
              <ul>
                <Li>100% accuracy of translations</Li>
                <Li>Cultural appropriateness</Li>
                <Li>Contextual correctness</Li>
                <Li>
                  Suitability for specific purposes (legal, medical, technical)
                </Li>
              </ul>
              <p style={{ margin: 0 }}>
                <strong>
                  You are solely responsible for verifying the accuracy and
                  appropriateness of all translations before use.
                </strong>
              </p>
            </WarningBox>
          </SubSection>

          <SubSection title="10.2 Third-Party Services Disclaimer">
            <p>We are not responsible for:</p>
            <ul>
              <Li>Third-party service outages, errors, or changes</Li>
              <Li>Payment processor failures or security breaches</Li>
              <Li>Third-party integrations or services</Li>
              <Li>External links or content</Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 11 */}
        <TosSection title="11. Limitation of Liability">
          <ImportantBox>
            <p style={{ margin: 0 }}>
              <strong>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </strong>
            </p>
          </ImportantBox>

          <p>This includes but is not limited to damages arising from:</p>
          <ul>
            <Li>Use or inability to use the Service</Li>
            <Li>Errors or inaccuracies in translations</Li>
            <Li>Data loss or corruption</Li>
            <Li>Unauthorized access to your account</Li>
            <Li>Service interruptions or downtime</Li>
            <Li>Third-party actions or omissions</Li>
            <Li>Reliance on machine-generated content</Li>
          </ul>

          <SubSection title="11.1 Maximum Liability Cap">
            <p>
              Our total liability to you for all claims arising from or related
              to the Service shall not exceed the greater of:
            </p>
            <ul>
              <Li>₹5,000 (Five Thousand Indian Rupees), OR</Li>
              <Li>
                The amount you paid to us in the 12 months preceding the claim
              </Li>
            </ul>
          </SubSection>

          <SubSection title="11.2 Exceptions">
            <p>Nothing in these Terms excludes or limits our liability for:</p>
            <ul>
              <Li>Death or personal injury caused by our negligence</Li>
              <Li>Fraud or fraudulent misrepresentation</Li>
              <Li>Any liability that cannot be excluded or limited by law</Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 12 */}
        <TosSection title="12. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless t09n.com, its
            officers, directors, employees, agents, and affiliates from and
            against any claims, liabilities, damages, losses, costs, or expenses
            (including reasonable attorneys&apos; fees) arising from:
          </p>
          <ul>
            <Li>Your use or misuse of the Service</Li>
            <Li>Violation of these Terms</Li>
            <Li>Violation of any rights of third parties</Li>
            <Li>Content you upload or submit</Li>
            <Li>Your negligence or willful misconduct</Li>
            <Li>Breach of any representations or warranties</Li>
          </ul>
          <p>
            We reserve the right to assume the exclusive defense and control of
            any matter subject to indemnification, at your expense.
          </p>
        </TosSection>

        {/* Section 13 */}
        <TosSection title="13. Dispute Resolution">
          <SubSection title="13.1 Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of India, without regard to conflict of law principles.
            </p>
          </SubSection>

          <SubSection title="13.2 Jurisdiction">
            <p>
              Any disputes arising from or relating to these Terms or the
              Service shall be subject to the exclusive jurisdiction of the
              courts located in India.
            </p>
          </SubSection>

          <SubSection title="13.3 Informal Resolution">
            <p>
              Before filing a formal claim, you agree to contact us at{" "}
              <a href="mailto:legal@t09n.com" style={linkStyle}>
                legal@t09n.com
              </a>{" "}
              to attempt to resolve the dispute informally. We will work in good
              faith to resolve the issue within 30 days.
            </p>
          </SubSection>

          <SubSection title="13.4 Arbitration (Optional)">
            <p>
              If we cannot resolve the dispute informally, either party may
              elect to resolve the dispute through binding arbitration in
              accordance with the Arbitration and Conciliation Act, 1996. The
              arbitration shall be conducted in India, in English.
            </p>
          </SubSection>

          <SubSection title="13.5 Class Action Waiver">
            <p>
              To the extent permitted by law, you agree that any dispute with us
              must be brought in your individual capacity and not as part of a
              class action, collective action, or representative proceeding.
            </p>
          </SubSection>
        </TosSection>

        {/* Section 14 */}
        <TosSection title="14. Export Control and Sanctions">
          <p>
            You agree to comply with all applicable export control and economic
            sanctions laws, including:
          </p>
          <ul>
            <Li>Indian export control regulations</Li>
            <Li>US export control laws (if applicable)</Li>
            <Li>International sanctions and embargoes</Li>
          </ul>
          <p>You represent that you are not:</p>
          <ul>
            <Li>
              Located in a country subject to US or Indian government embargo
            </Li>
            <Li>
              Listed on any government prohibited or restricted parties list
            </Li>
            <Li>A person or entity with whom transactions are prohibited</Li>
          </ul>
        </TosSection>

        {/* Section 15 */}
        <TosSection title="15. Termination">
          <SubSection title="15.1 Termination by You">
            <p>You may terminate your account at any time by:</p>
            <ol>
              <Li>Cancelling your subscription (if applicable)</Li>
              <Li>Going to Settings → Account → Delete Account</Li>
              <Li>
                Contacting us at{" "}
                <a href="mailto:support@t09n.com" style={linkStyle}>
                  support@t09n.com
                </a>
              </Li>
            </ol>
            <p>Upon termination:</p>
            <ul>
              <Li>Your access to the Service will be disabled immediately</Li>
              <Li>
                Your data will be deleted within 30 days (see Privacy Policy for
                details)
              </Li>
              <Li>No refunds will be provided for prepaid subscriptions</Li>
            </ul>
          </SubSection>

          <SubSection title="15.2 Termination by Us">
            <p>We may suspend or terminate your account immediately if:</p>
            <ul>
              <Li>You violate these Terms or our policies</Li>
              <Li>Your payment fails or account is past due</Li>
              <Li>You engage in fraudulent, illegal, or abusive activity</Li>
              <Li>Required by law or legal process</Li>
              <Li>We discontinue the Service (with 30 days&apos; notice)</Li>
            </ul>
          </SubSection>

          <SubSection title="15.3 Effect of Termination">
            <p>Upon termination of your account:</p>
            <ul>
              <Li>All rights and licenses granted to you will terminate</Li>
              <Li>You must cease all use of the Service</Li>
              <Li>
                Provisions that by their nature should survive will remain in
                effect (e.g., intellectual property, liability limitations,
                dispute resolution)
              </Li>
            </ul>
          </SubSection>
        </TosSection>

        {/* Section 16 */}
        <TosSection title="16. General Provisions">
          <SubSection title="16.1 Entire Agreement">
            <p>
              These Terms, together with our Privacy Policy and any other
              policies referenced herein, constitute the entire agreement
              between you and t09n.com regarding the Service and supersede all
              prior agreements and understandings.
            </p>
          </SubSection>

          <SubSection title="16.2 Severability">
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions will remain in full force
              and effect. The invalid provision will be modified to the minimum
              extent necessary to make it enforceable.
            </p>
          </SubSection>

          <SubSection title="16.3 Waiver">
            <p>
              Our failure to enforce any right or provision of these Terms does
              not constitute a waiver of that right or provision. Any waiver
              must be in writing and signed by us.
            </p>
          </SubSection>

          <SubSection title="16.4 Assignment">
            <p>
              You may not assign or transfer these Terms or your rights under
              them without our prior written consent. We may assign these Terms
              without restriction. Any attempted assignment in violation of this
              provision is void.
            </p>
          </SubSection>

          <SubSection title="16.5 Force Majeure">
            <p>
              We are not liable for any failure or delay in performance due to
              circumstances beyond our reasonable control, including:
            </p>
            <ul>
              <Li>Natural disasters</Li>
              <Li>Acts of war or terrorism</Li>
              <Li>Government actions or regulations</Li>
              <Li>Internet or telecommunications failures</Li>
              <Li>Power outages</Li>
              <Li>Pandemics or public health emergencies</Li>
            </ul>
          </SubSection>

          <SubSection title="16.6 Notices">
            <p>
              All notices to you will be sent to the email address associated
              with your account. You must ensure your email address is current.
              Notices to us should be sent to{" "}
              <a href="mailto:legal@t09n.com" style={linkStyle}>
                legal@t09n.com
              </a>
              .
            </p>
          </SubSection>

          <SubSection title="16.7 Language">
            <p>
              These Terms are written in English. Any translations are provided
              for convenience only. In case of conflict, the English version
              prevails.
            </p>
          </SubSection>

          <SubSection title="16.8 Relationship">
            <p>
              Nothing in these Terms creates a partnership, joint venture,
              employment, or agency relationship between you and t09n.com. You
              are an independent user of the Service.
            </p>
          </SubSection>

          <SubSection title="16.9 Third-Party Beneficiaries">
            <p>
              These Terms are for the benefit of you and t09n.com only. No third
              party has any right to enforce any provision of these Terms.
            </p>
          </SubSection>
        </TosSection>

        {/* Section 17 */}
        <TosSection title="17. Contact Information">
          <p>
            If you have any questions, concerns, or feedback about these Terms
            or the Service, please contact us:
          </p>
          <ContactBox>
            <p>
              <strong>Company Name:</strong> t09n.com (operated by LOCALIZATION
              LOUNGE)
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:legal@t09n.com" style={linkStyle}>
                legal@t09n.com
              </a>
            </p>
            <p>
              <strong>Support:</strong>{" "}
              <a href="mailto:support@t09n.com" style={linkStyle}>
                support@t09n.com
              </a>
            </p>
            <p>
              <strong>Billing:</strong>{" "}
              <a href="mailto:billing@t09n.com" style={linkStyle}>
                billing@t09n.com
              </a>
            </p>
            <p>
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00
              PM IST
            </p>
            <p>
              <strong>Response Time:</strong> We aim to respond within 48 hours
              (business days)
            </p>
          </ContactBox>
        </TosSection>

        {/* Section 18 */}
        <TosSection title="18. Acknowledgment">
          <p>
            By clicking &ldquo;I Agree&rdquo; during registration, checking a
            box, or using the Service, you acknowledge that:
          </p>
          <ul>
            <Li>You have read and understood these Terms of Service</Li>
            <Li>You agree to be bound by these Terms</Li>
            <Li>You are at least 18 years of age</Li>
            <Li>You have the legal authority to enter into this agreement</Li>
            <Li>
              You understand that machine-generated translations may contain
              errors and require human review
            </Li>
            <Li>
              You accept the limitations of liability and disclaimers set forth
              herein
            </Li>
          </ul>

          <HighlightBox>
            <p style={{ marginBottom: "8px" }}>
              <strong>Thank you for using t09n.com!</strong>
            </p>
            <p style={{ margin: 0 }}>
              We&apos;re committed to providing you with a professional,
              reliable, and secure translation platform. If you have any
              questions or need assistance, our support team is here to help.
            </p>
          </HighlightBox>
        </TosSection>

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
            <a href="/acceptable-use-policy" style={linkStyle}>
              Acceptable Use Policy
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

function TosSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: "0" }}>
      <h2
        className="tos-h2"
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

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fef3c7",
        borderLeft: "4px solid #f59e0b",
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

function ImportantBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fee2e2",
        borderLeft: "4px solid #ef4444",
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
