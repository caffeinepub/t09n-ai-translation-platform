/* ─── Download Page ──────────────────────────────────────────────────── */
import { useState } from "react";

/* Files available in /static-export/ (served as static assets) */
const STATIC_FILES = [
  {
    filename: "index.html",
    folder: "",
    description:
      "Main landing page — all 10 sections (Navbar, Hero, Problem, Features, How It Works, Pricing, Stats, Testimonials, FAQ, Waitlist, Footer)",
    path: "/static-export/index.html",
    mime: "text/html",
  },
  {
    filename: "css/styles.css",
    folder: "css/",
    description:
      "Main stylesheet — blue/white color scheme, responsive layout, hero animations, all components",
    path: "/static-export/css/styles.css",
    mime: "text/css",
  },
  {
    filename: "css/legal.css",
    folder: "css/",
    description:
      "Legal pages stylesheet — shared styles for Privacy Policy, Terms of Service, and AUP",
    path: "/static-export/css/legal.css",
    mime: "text/css",
  },
  {
    filename: "js/main.js",
    folder: "js/",
    description:
      "Main JavaScript — navbar scroll, hero color animation, FAQ accordion, waitlist form, fade-in on scroll",
    path: "/static-export/js/main.js",
    mime: "text/javascript",
  },
  {
    filename: "privacy-policy.html",
    folder: "",
    description:
      "Privacy Policy — 16 sections, LOCALIZATION LOUNGE, GDPR/CCPA rights, cookies table (no AI/ML mentions)",
    path: "/static-export/privacy-policy.html",
    mime: "text/html",
  },
  {
    filename: "terms-of-service.html",
    folder: "",
    description:
      "Terms of Service — 18 sections, pricing table, refund policy, dispute resolution, IP rights",
    path: "/static-export/terms-of-service.html",
    mime: "text/html",
  },
  {
    filename: "acceptable-use-policy.html",
    folder: "",
    description:
      "Acceptable Use Policy — 14 sections, green/red use cards, enforcement tiers, appeals process",
    path: "/static-export/acceptable-use-policy.html",
    mime: "text/html",
  },
];

const BINARY_ASSETS = [
  { filename: "Version-01-1-1.png", use: "Favicon" },
  { filename: "Version-01-2-1.png", use: "Navbar logo" },
  { filename: "Version-01-3-1.png", use: "Hero logo (inverted)" },
  { filename: "Version-04-1.png", use: "Footer & legal pages logo" },
  {
    filename: "Fontspring-DEMO-allroundgothic-boldoblique.otf",
    use: "Hero headline font",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback: select text
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{
        padding: "6px 14px",
        borderRadius: "6px",
        border: "1px solid #E5E7EB",
        background: copied ? "#D1FAE5" : "#F9FAFB",
        color: copied ? "#065F46" : "#374151",
        fontSize: "13px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {copied ? "✓ Copied!" : "Copy content"}
    </button>
  );
}

function FileRow({
  file,
  content,
}: {
  file: (typeof STATIC_FILES)[0];
  content: string | null;
}) {
  const handleDownload = () => {
    if (!content) return;
    try {
      const blob = new Blob([content], { type: file.mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.filename.split("/").pop() || file.filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 500);
    } catch {
      // fallback to direct link
      window.open(file.path, "_blank");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "1rem",
        border: "1px solid #E5E7EB",
        borderRadius: "10px",
        background: "#FAFAFA",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "#111",
              fontFamily: "monospace",
              marginBottom: "4px",
            }}
          >
            {file.folder && (
              <span style={{ color: "#9CA3AF", fontWeight: 400 }}>
                {file.folder}
              </span>
            )}
            {file.filename.split("/").pop()}
          </p>
          <p style={{ fontSize: "13px", color: "#6B7280" }}>
            {file.description}
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          {content ? (
            <>
              <button
                type="button"
                onClick={handleDownload}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#1A6EF8",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                ↓ Download
              </button>
              <CopyButton text={content} />
            </>
          ) : (
            <a
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "none",
                background: "#1A6EF8",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              View file
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function useFetchAll() {
  const [contents, setContents] = useState<Record<string, string | null>>({});
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetchAll = async () => {
    if (loaded) return;
    setLoading(true);
    const results: Record<string, string | null> = {};
    await Promise.all(
      STATIC_FILES.map(async (f) => {
        try {
          const res = await fetch(f.path);
          if (res.ok) {
            results[f.filename] = await res.text();
          } else {
            results[f.filename] = null;
          }
        } catch {
          results[f.filename] = null;
        }
      }),
    );
    setContents(results);
    setLoading(false);
    setLoaded(true);
  };

  return { contents, loading, loaded, fetchAll };
}

export default function DownloadPage() {
  const { contents, loading, loaded, fetchAll } = useFetchAll();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F9FC",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <a
            href="/"
            style={{
              color: "#1A6EF8",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "1.25rem",
            }}
          >
            ← Back to site
          </a>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#111",
              marginBottom: "0.5rem",
            }}
          >
            Static Export — t09n.com
          </h1>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Pure HTML / CSS / JS — no build tools, no Node.js, no framework.
            Works on any shared hosting.
          </p>
        </div>

        {/* Load button */}
        {!loaded && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <button
              type="button"
              onClick={fetchAll}
              disabled={loading}
              style={{
                padding: "14px 32px",
                borderRadius: "10px",
                border: "none",
                background: loading ? "#93C5FD" : "#1A6EF8",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Loading files…" : "Load All Files for Download"}
            </button>
          </div>
        )}

        {/* File list */}
        {loaded && (
          <>
            <div
              style={{
                background: "#ECFDF5",
                border: "1px solid #A7F3D0",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                fontSize: "14px",
                color: "#065F46",
              }}
            >
              <strong>✓ All 7 files ready.</strong> Click "↓ Download" to save
              each file, or "Copy content" to copy to clipboard.
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {STATIC_FILES.map((f) => (
                <FileRow
                  key={f.filename}
                  file={f}
                  content={contents[f.filename] ?? null}
                />
              ))}
            </div>
          </>
        )}

        {/* Folder structure */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#111",
              marginBottom: "1rem",
            }}
          >
            Required folder structure on your server
          </h2>
          <pre
            style={{
              background: "#F3F4F6",
              borderRadius: "8px",
              padding: "1rem",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#374151",
              overflowX: "auto",
              lineHeight: 1.7,
            }}
          >
            {`your-hosting-root/
├── index.html
├── privacy-policy.html
├── terms-of-service.html
├── acceptable-use-policy.html
├── css/
│   ├── styles.css
│   └── legal.css
├── js/
│   └── main.js
└── assets/
    ├── Fontspring-DEMO-allroundgothic-boldoblique.otf  ← copy from source
    └── uploads/
        ├── Version-01-1-1.png   ← favicon
        ├── Version-01-2-1.png   ← navbar logo
        ├── Version-01-3-1.png   ← hero logo
        └── Version-04-1.png     ← footer & legal logo`}
          </pre>
        </div>

        {/* Binary assets */}
        <div
          style={{
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#92400E",
              marginBottom: "0.5rem",
            }}
          >
            ⚠ Binary assets — copy manually
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#92400E",
              marginBottom: "1rem",
            }}
          >
            These files cannot be downloaded as text. Copy them from{" "}
            <code
              style={{
                background: "#FEF3C7",
                padding: "2px 6px",
                borderRadius: "4px",
                fontFamily: "monospace",
              }}
            >
              src/frontend/public/assets/
            </code>{" "}
            in your project:
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {BINARY_ASSETS.map((asset) => (
              <div
                key={asset.filename}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  background: "#FEF3C7",
                  borderRadius: "8px",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <code style={{ fontSize: "13px", color: "#92400E" }}>
                  {asset.filename}
                </code>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#B45309",
                    fontStyle: "italic",
                  }}
                >
                  {asset.use}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
