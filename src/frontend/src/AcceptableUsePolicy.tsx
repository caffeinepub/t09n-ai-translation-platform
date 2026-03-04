/* ─── Acceptable Use Policy Page ─────────────────────────────────────── */

export default function AcceptableUsePolicy() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <style>{`
        .aup-body p {
          margin-bottom: 16px;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.6;
        }
        .aup-body ul, .aup-body ol {
          margin-bottom: 16px;
          margin-left: 24px;
        }
        .aup-body li {
          margin-bottom: 8px;
          color: #4b5563;
        }
        .aup-body strong {
          color: #111827;
          font-weight: 600;
        }
        .aup-body a {
          color: #667eea;
          text-decoration: none;
        }
        .aup-body a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .aup-h1 { font-size: 28px !important; }
          .aup-h2 { font-size: 20px !important; }
          .aup-container { padding: 20px 16px !important; }
        }
      `}</style>
      <div
        className="aup-container aup-body"
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
            data-ocid="aup.back_link"
            style={{
              color: "#667eea",
              textDecoration: "none",
              fontSize: "14px",
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
            className="aup-h1"
            style={{ fontSize: "36px", color: "#111827", marginBottom: "10px" }}
          >
            Acceptable Use Policy
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              fontStyle: "italic",
              marginBottom: 0,
            }}
          >
            Last Updated: March 4, 2026
          </p>
        </div>

        {/* Purpose box */}
        <div
          style={{
            background: "#f0f4ff",
            borderLeft: "4px solid #667eea",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>Purpose of This Policy</strong>
          </p>
          <p style={{ marginBottom: 0 }}>
            This Acceptable Use Policy ("AUP") outlines the rules and guidelines
            for using t09n.com's translation services. By using our platform,
            you agree to comply with this policy. Violations may result in
            immediate account suspension or termination without refund.
          </p>
        </div>

        {/* Section 1 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          1. Overview
        </h2>
        <p>
          This Acceptable Use Policy is incorporated into and forms part of our{" "}
          <a href="/terms-of-service">Terms of Service</a>. It applies to all
          users of t09n.com, including:
        </p>
        <ul>
          <li>Free plan users</li>
          <li>Pay-as-you-go users</li>
          <li>Subscription users (Starter, Professional, Business plans)</li>
          <li>Team members and collaborators</li>
          <li>Trial users</li>
        </ul>
        <p>
          We reserve the right to update this policy at any time. Continued use
          of our services after changes constitutes acceptance of the updated
          policy.
        </p>

        {/* Section 2 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          2. Permitted Uses
        </h2>

        <div
          style={{
            background: "#d1fae5",
            borderLeft: "4px solid #10b981",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: 0 }}>
            <strong>You MAY use t09n.com for:</strong>
          </p>
        </div>

        {[
          {
            title: "✓ Professional Translation Services",
            desc: "Translating business documents, marketing materials, contracts, reports, emails, and other professional content for legitimate business purposes.",
          },
          {
            title: "✓ Personal Translation Projects",
            desc: "Translating personal documents, letters, resumes, educational materials, or content for personal use.",
          },
          {
            title: "✓ Educational and Research Purposes",
            desc: "Using the platform for academic research, language learning, educational projects, or teaching purposes.",
          },
          {
            title: "✓ Commercial Content Translation",
            desc: "Translating website content, product descriptions, user manuals, help documentation, or customer communications (with appropriate subscription).",
          },
          {
            title: "✓ Creative Content Translation",
            desc: "Translating blogs, articles, creative writing, social media posts, or marketing copy for publication or distribution.",
          },
          {
            title: "✓ Technical Documentation",
            desc: "Translating software documentation, API guides, technical manuals, or IT-related content.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#f0fdf4",
              borderLeft: "3px solid #10b981",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        {/* Section 3 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          3. Prohibited Uses
        </h2>

        <div
          style={{
            background: "#fee2e2",
            borderLeft: "4px solid #ef4444",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>
              You may NOT use t09n.com for any of the following purposes:
            </strong>
          </p>
          <p style={{ marginBottom: 0 }}>
            Violations of this section will result in immediate account
            termination without notice or refund.
          </p>
        </div>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.1 Illegal Content and Activities
        </h3>

        {[
          {
            title: "✗ Child Sexual Abuse Material (CSAM)",
            desc: "Any content involving minors in sexual or exploitative contexts, including text, descriptions, or references. This includes grooming content, age-inappropriate sexual content involving minors, or any material that sexualizes children.",
            note: "Zero tolerance - immediate account termination and reporting to authorities.",
          },
          {
            title: "✗ Terrorism and Violent Extremism",
            desc: "Content that promotes, encourages, or provides instructions for terrorist activities, violent extremism, or attacks against individuals or groups.",
          },
          {
            title: "✗ Illegal Trade and Services",
            desc: "Content related to illegal drugs, weapons trafficking, human trafficking, illegal wildlife trade, counterfeit goods, or other illicit commerce.",
          },
          {
            title: "✗ Money Laundering and Financial Crimes",
            desc: "Content facilitating money laundering, fraud, financial scams, Ponzi schemes, or other financial crimes.",
          },
          {
            title: "✗ Intellectual Property Infringement",
            desc: "Translating copyrighted content without proper authorization, plagiarized material, or content that violates trademarks, patents, or trade secrets.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: item.note ? "4px" : 0 }}>{item.desc}</p>
            {item.note && (
              <p style={{ marginBottom: 0 }}>
                <em>{item.note}</em>
              </p>
            )}
          </div>
        ))}

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.2 Harmful and Abusive Content
        </h3>

        {[
          {
            title: "✗ Hate Speech and Discrimination",
            desc: "Content that promotes hatred, violence, or discrimination against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or national origin.",
          },
          {
            title: "✗ Harassment and Bullying",
            desc: "Content intended to harass, threaten, intimidate, or bully individuals or groups, including doxxing, stalking content, or targeted harassment campaigns.",
          },
          {
            title: "✗ Violence and Graphic Content",
            desc: "Excessively violent, gory, or graphic content that glorifies violence or is intended to shock or disturb, including detailed descriptions of violent acts.",
          },
          {
            title: "✗ Self-Harm and Suicide Promotion",
            desc: "Content that encourages, promotes, or provides instructions for self-harm, suicide, or eating disorders.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.3 Deceptive and Malicious Activities
        </h3>

        {[
          {
            title: "✗ Spam and Phishing",
            desc: "Mass unsolicited messages, phishing attempts, email scams, or deceptive content designed to steal personal information or credentials.",
          },
          {
            title: "✗ Misinformation and Disinformation",
            desc: "Deliberately false or misleading content about health (especially during public health crises), elections, civic processes, or emergencies where such content could cause harm.",
          },
          {
            title: "✗ Malware and Malicious Code",
            desc: "Content containing viruses, malware, ransomware, trojans, or instructions for creating malicious software or exploiting security vulnerabilities.",
          },
          {
            title: "✗ Identity Theft and Impersonation",
            desc: "Content designed to impersonate individuals, organizations, or entities for fraudulent purposes, or content facilitating identity theft.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.4 Privacy Violations
        </h3>

        {[
          {
            title: "✗ Personal Data Harvesting",
            desc: "Scraping, collecting, or harvesting personal information without consent, including email addresses, phone numbers, or other identifying information.",
          },
          {
            title: "✗ Non-Consensual Intimate Content",
            desc: 'Intimate images or content shared without the consent of the individuals depicted, including "revenge porn" or leaked private communications.',
          },
          {
            title: "✗ Surveillance and Stalking",
            desc: "Content that facilitates unauthorized surveillance, stalking, or tracking of individuals without their knowledge or consent.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.5 Service Abuse and Misuse
        </h3>

        {[
          {
            title: "✗ Automated Scraping and Bot Activity",
            desc: "Using bots, scripts, or automated tools to scrape data, bypass usage limits, or abuse the service in ways that violate our Terms of Service.",
          },
          {
            title: "✗ Reverse Engineering",
            desc: "Attempting to reverse engineer, decompile, disassemble, or extract the source code of our translation technology or platform.",
          },
          {
            title: "✗ Account Manipulation",
            desc: "Creating multiple accounts to circumvent usage limits, referral fraud, or exploiting promotional offers beyond their intended purpose.",
          },
          {
            title: "✗ Reselling Without Authorization",
            desc: "Reselling, sublicensing, or redistributing access to t09n.com services without explicit written permission from us.",
          },
          {
            title: "✗ Service Disruption",
            desc: "Activities that disrupt, overload, or impair the functionality of our platform, including denial-of-service attacks or excessive API calls.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          3.6 Regulated Industries Without Proper Authorization
        </h3>

        {[
          {
            title: "✗ Unauthorized Medical or Pharmaceutical Content",
            desc: "Translating prescriptions, medical diagnoses, or pharmaceutical instructions for unauthorized distribution or without proper medical credentials. (Note: Legitimate healthcare providers may use our service with appropriate disclaimers.)",
          },
          {
            title: "✗ Legal Documents for Unauthorized Practice",
            desc: "Translating legal contracts, court documents, or legal advice for distribution by non-licensed individuals engaging in unauthorized practice of law.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fef2f2",
              borderLeft: "3px solid #ef4444",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              <strong>{item.title}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        {/* Section 4 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          4. Content Moderation and Monitoring
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          4.1 Our Rights
        </h3>
        <p>We reserve the right to:</p>
        <ul>
          <li>
            Review content uploaded to our platform for compliance with this
            policy
          </li>
          <li>Use automated systems to detect prohibited content</li>
          <li>Suspend or terminate accounts that violate this policy</li>
          <li>Report illegal activities to law enforcement authorities</li>
          <li>Remove or refuse to process content that violates this policy</li>
          <li>Cooperate with legal investigations and court orders</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          4.2 No Obligation to Monitor
        </h3>
        <p>
          While we reserve the right to review content, we are not obligated to:
        </p>
        <ul>
          <li>Pre-screen all content before translation</li>
          <li>Continuously monitor user activities</li>
          <li>Investigate potential violations unless reported</li>
        </ul>
        <p>
          <strong>
            Users are solely responsible for ensuring their content complies
            with this policy and all applicable laws.
          </strong>
        </p>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          4.3 Automated Detection
        </h3>
        <p>We may use automated systems to detect:</p>
        <ul>
          <li>Known patterns of prohibited content</li>
          <li>Suspicious usage patterns</li>
          <li>Potential violations of this policy</li>
        </ul>
        <p>
          These systems are not perfect and may occasionally flag legitimate
          content for review. If your content is flagged in error, contact us at{" "}
          <a href="mailto:support@t09n.com">support@t09n.com</a>.
        </p>

        {/* Section 5 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          5. Reporting Violations
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          5.1 How to Report
        </h3>
        <p>
          If you encounter content or behavior that violates this policy, please
          report it immediately:
        </p>

        <div
          style={{
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            padding: "20px",
            borderRadius: "8px",
            margin: "32px 0",
          }}
        >
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:abuse@t09n.com">abuse@t09n.com</a>
          </p>
          <p>
            <strong>Subject Line:</strong> "AUP Violation Report"
          </p>
          <p>
            <strong>Include:</strong>
          </p>
          <ul>
            <li>Description of the violation</li>
            <li>Account or content identifier (if known)</li>
            <li>Date and time of occurrence</li>
            <li>Any supporting evidence (screenshots, URLs, etc.)</li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          5.2 Our Response
        </h3>
        <p>Upon receiving a report, we will:</p>
        <ul>
          <li>Acknowledge receipt within 48 hours</li>
          <li>Investigate the reported violation</li>
          <li>Take appropriate action (warning, suspension, or termination)</li>
          <li>Notify the reporter of the outcome (where appropriate)</li>
          <li>Report serious violations to law enforcement if necessary</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          5.3 False Reports
        </h3>
        <p>
          Filing false or malicious reports is a violation of this policy and
          may result in account termination.
        </p>

        {/* Section 6 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          6. Consequences of Violations
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          6.1 Enforcement Actions
        </h3>
        <p>
          Depending on the severity and frequency of violations, we may take the
          following actions:
        </p>

        <div
          style={{
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>First Offense (Minor Violations):</strong>
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li>Warning email with explanation</li>
            <li>Temporary suspension (24-72 hours)</li>
            <li>Requirement to acknowledge policy before reinstatement</li>
          </ul>
        </div>

        <div
          style={{
            background: "#fee2e2",
            borderLeft: "4px solid #ef4444",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>Serious Violations or Repeat Offenses:</strong>
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li>Immediate account suspension</li>
            <li>Permanent account termination</li>
            <li>No refunds for prepaid services</li>
            <li>Deletion of all user data</li>
            <li>IP address ban to prevent account recreation</li>
          </ul>
        </div>

        <div
          style={{
            background: "#fee2e2",
            borderLeft: "4px solid #ef4444",
            padding: "16px",
            margin: "24px 0",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>Illegal Activity:</strong>
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li>Immediate account termination</li>
            <li>Preservation of evidence</li>
            <li>Reporting to law enforcement authorities</li>
            <li>Full cooperation with legal investigations</li>
            <li>Potential legal action</li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          6.2 No Refunds
        </h3>
        <p>
          Accounts terminated for violations of this policy are not eligible for
          refunds of any kind, including:
        </p>
        <ul>
          <li>Unused subscription time</li>
          <li>Unused word credits</li>
          <li>Prepaid balances</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          6.3 Appeals Process
        </h3>
        <p>
          If you believe your account was suspended or terminated in error, you
          may appeal by:
        </p>
        <ol>
          <li>
            Sending an email to{" "}
            <a href="mailto:appeals@t09n.com">appeals@t09n.com</a>
          </li>
          <li>Including your account email and a detailed explanation</li>
          <li>Providing any evidence supporting your appeal</li>
        </ol>
        <p>
          We will review appeals within 7 business days. Our decision after
          appeal is final.
        </p>

        {/* Section 7 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          7. Legal and Regulatory Compliance
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          7.1 Export Control
        </h3>
        <p>You agree not to use our services to:</p>
        <ul>
          <li>Violate export control laws or regulations</li>
          <li>
            Translate content for countries subject to trade sanctions or
            embargoes
          </li>
          <li>
            Facilitate the transfer of controlled technology or information
          </li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          7.2 Sanctions Compliance
        </h3>
        <p>You represent that you are not:</p>
        <ul>
          <li>Located in a sanctioned country or territory</li>
          <li>Listed on any government prohibited parties list</li>
          <li>Owned or controlled by a sanctioned entity</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          7.3 Data Protection Laws
        </h3>
        <p>When using our service, you must comply with:</p>
        <ul>
          <li>GDPR (if processing EU personal data)</li>
          <li>Indian data protection laws</li>
          <li>Any applicable privacy and data protection regulations</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          7.4 Industry-Specific Regulations
        </h3>
        <p>
          If you operate in a regulated industry (healthcare, finance, legal,
          etc.), you are responsible for:
        </p>
        <ul>
          <li>Ensuring our service meets your regulatory requirements</li>
          <li>Obtaining necessary approvals or certifications</li>
          <li>Complying with industry-specific data handling requirements</li>
          <li>Using appropriate disclaimers and professional review</li>
        </ul>

        {/* Section 8 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          8. Intellectual Property Considerations
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          8.1 Respecting Copyright
        </h3>
        <p>
          Before translating content, ensure you have the right to do so. You
          may only translate:
        </p>
        <ul>
          <li>Content you created or own</li>
          <li>Content you have permission to translate</li>
          <li>Content in the public domain</li>
          <li>Content covered by fair use (consult a lawyer if unsure)</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          8.2 Trademark Usage
        </h3>
        <p>When translating content containing trademarks:</p>
        <ul>
          <li>Do not translate registered trademarks without authorization</li>
          <li>Maintain proper trademark notices and attributions</li>
          <li>Follow brand guidelines when provided</li>
        </ul>

        {/* Section 9 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          9. Fair Use Guidelines
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          9.1 Reasonable Usage
        </h3>
        <p>While we provide generous usage limits, you agree to:</p>
        <ul>
          <li>Use the service for its intended purpose</li>
          <li>Not abuse free trial or free tier offerings</li>
          <li>Not upload the same content repeatedly to bypass quotas</li>
          <li>Not share accounts or credentials to circumvent user limits</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          9.2 System Resources
        </h3>
        <p>You agree not to:</p>
        <ul>
          <li>Submit excessively large files that strain system resources</li>
          <li>Make unreasonably high volumes of translation requests</li>
          <li>
            Use automated systems to submit translations at high frequency
          </li>
        </ul>
        <p>
          We reserve the right to throttle or limit usage that we determine to
          be excessive or abusive.
        </p>

        {/* Section 10 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          10. Professional and Ethical Standards
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          10.1 Translation Quality
        </h3>
        <p>When using our service professionally:</p>
        <ul>
          <li>
            Review and edit automated translation system outputs before delivery
          </li>
          <li>
            Do not represent machine translations as human translations without
            disclosure
          </li>
          <li>Apply appropriate quality control measures</li>
          <li>Add disclaimers when required by your profession or industry</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          10.2 Confidentiality
        </h3>
        <p>If you handle confidential information:</p>
        <ul>
          <li>Ensure you have authorization to upload confidential content</li>
          <li>
            Review our <a href="/privacy-policy">Privacy Policy</a> regarding
            data handling
          </li>
          <li>
            Use appropriate security measures (strong passwords, secure
            connections)
          </li>
          <li>Consider using our Business plan for enhanced team controls</li>
        </ul>

        {/* Section 11 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          11. Account Responsibilities
        </h2>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          11.1 Account Security
        </h3>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the security of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Immediately notifying us of any unauthorized access</li>
          <li>Using strong, unique passwords</li>
        </ul>

        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          11.2 Accurate Information
        </h3>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate registration information</li>
          <li>Keep your contact information up to date</li>
          <li>Provide truthful information in support requests</li>
          <li>Not impersonate others or misrepresent your identity</li>
        </ul>

        {/* Section 12 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          12. Updates to This Policy
        </h2>

        <p>We may update this Acceptable Use Policy at any time to:</p>
        <ul>
          <li>Address new types of prohibited content or behavior</li>
          <li>Comply with legal or regulatory requirements</li>
          <li>Improve clarity or organization</li>
          <li>Reflect changes in our services or technology</li>
        </ul>

        <p>When we make material changes:</p>
        <ul>
          <li>We will update the "Last Updated" date at the top</li>
          <li>We will notify active users via email</li>
          <li>
            The updated policy will take effect 30 days after notification
          </li>
          <li>Continued use after the effective date constitutes acceptance</li>
        </ul>

        {/* Section 13 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          13. Contact Information
        </h2>

        <p>
          If you have questions about this Acceptable Use Policy, please contact
          us:
        </p>

        <div
          style={{
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            padding: "20px",
            borderRadius: "8px",
            margin: "32px 0",
          }}
        >
          <p>
            <strong>General Inquiries:</strong>{" "}
            <a href="mailto:support@t09n.com">support@t09n.com</a>
          </p>
          <p>
            <strong>Policy Violations:</strong>{" "}
            <a href="mailto:abuse@t09n.com">abuse@t09n.com</a>
          </p>
          <p>
            <strong>Appeals:</strong>{" "}
            <a href="mailto:appeals@t09n.com">appeals@t09n.com</a>
          </p>
          <p>
            <strong>Legal Matters:</strong>{" "}
            <a href="mailto:legal@t09n.com">legal@t09n.com</a>
          </p>
          <p>
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            IST
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Response Time:</strong> We aim to respond within 48 hours
            (business days)
          </p>
        </div>

        {/* Section 14 */}
        <h2
          className="aup-h2"
          style={{
            fontSize: "24px",
            color: "#1f2937",
            marginTop: "40px",
            marginBottom: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          14. Interpretation
        </h2>

        <p>This Acceptable Use Policy should be read in conjunction with:</p>
        <ul>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>

        <p>
          In case of conflict between documents, the order of precedence is:
        </p>
        <ol>
          <li>Terms of Service</li>
          <li>Acceptable Use Policy</li>
          <li>Privacy Policy</li>
        </ol>

        {/* Closing highlight */}
        <div
          style={{
            background: "#f0f4ff",
            borderLeft: "4px solid #667eea",
            padding: "16px",
            margin: "40px 0 24px",
            borderRadius: "4px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>
              Thank you for helping us maintain a safe and professional
              platform.
            </strong>
          </p>
          <p style={{ marginBottom: 0 }}>
            By following these guidelines, you contribute to a positive
            experience for all t09n.com users. We appreciate your cooperation in
            keeping our community safe, legal, and productive.
          </p>
        </div>

        {/* Footer */}
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
          <p>&copy; 2026 t09n.com. All rights reserved.</p>
          <p>
            <a href="/terms-of-service">Terms of Service</a> |{" "}
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/acceptable-use-policy">Acceptable Use Policy</a> |{" "}
            <a href="/contact">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
