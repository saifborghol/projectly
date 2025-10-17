"use client";

import React, { useEffect, useMemo, useState } from "react";

// =====================
// 1) Types
// =====================
export type SeoConfig = {
  // Basic
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string; // e.g. "index, follow"
  canonical: string;

  // Open Graph
  ogTitle: string;
  ogDescription: string;
  ogType: string; // website/article
  ogImage: string;
  ogSiteName: string;
  ogUrl: string;

  // Twitter
  twitterCard: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;

  // Business / geo
  geoRegion: string; // e.g. "TN"
  geoPlacename: string; // e.g. "Tunis"
  locality: string; // business.contact_data.locality
  region: string; // business.contact_data.region
  country: string; // business.contact_data.country

  // Structured data (LocalBusiness)
  businessName: string;
  businessDescription: string;
  domain: string; // https://yourdomain.com (used for @id + url)
  serviceAreaName: string;
  priceRange: string; // $, $$, $$$
  services: string[]; // names only, we’ll map to Offer -> Service
};

const EMPTY: SeoConfig = {
  title: "",
  description: "",
  keywords: "",
  author: "",
  robots: "index, follow",
  canonical: "",
  ogTitle: "",
  ogDescription: "",
  ogType: "website",
  ogImage: "",
  ogSiteName: "",
  ogUrl: "",
  twitterCard: "summary_large_image",
  twitterTitle: "",
  twitterDescription: "",
  twitterImage: "",
  geoRegion: "",
  geoPlacename: "",
  locality: "",
  region: "",
  country: "",
  businessName: "",
  businessDescription: "",
  domain: "",
  serviceAreaName: "",
  priceRange: "",
  services: [],
};

// LocalStorage key used by the runtime SEO component to hydrate <head>
const STORAGE_KEY = "seoConfig";

// =====================
// 2) Helper: build LD+JSON from config
// =====================
function buildStructuredData(cfg: SeoConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: cfg.businessName,
    description: cfg.businessDescription,
    "@id": cfg.domain || undefined,
    url: cfg.domain || undefined,
    serviceArea: cfg.serviceAreaName
      ? { "@type": "Place", name: cfg.serviceAreaName }
      : undefined,
    priceRange: cfg.priceRange || undefined,
    hasOfferCatalog: cfg.services.length
      ? {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: cfg.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
          })),
        }
      : undefined,
  };
}

// =====================
// 3) Admin Wizard Component
//    Drop this into a page, e.g. app/seo-wizard/page.tsx
// =====================
export default function SeoWizard() {
  const [cfg, setCfg] = useState<SeoConfig>(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as SeoConfig) : EMPTY;
      } catch (_) {
        return EMPTY;
      }
    }
    return EMPTY;
  });

  const [newService, setNewService] = useState("");

  const ldJson = useMemo(
    () => JSON.stringify(buildStructuredData(cfg), null, 2),
    [cfg]
  );

  const metaSnippet = useMemo(() => {
    const lines: string[] = [];

    // Title
    if (cfg.title) lines.push(`<title>${escapeHtml(cfg.title)}</title>`);

    // Basic meta
    if (cfg.description)
      lines.push(
        `<meta name="description" content="${escapeAttr(cfg.description)}" />`
      );
    if (cfg.keywords)
      lines.push(
        `<meta name="keywords" content="${escapeAttr(cfg.keywords)}" />`
      );
    if (cfg.author)
      lines.push(`<meta name="author" content="${escapeAttr(cfg.author)}" />`);
    if (cfg.robots)
      lines.push(`<meta name="robots" content="${escapeAttr(cfg.robots)}" />`);

    // Open Graph
    if (cfg.ogTitle)
      lines.push(
        `<meta property="og:title" content="${escapeAttr(cfg.ogTitle)}" />`
      );
    if (cfg.ogDescription)
      lines.push(
        `<meta property="og:description" content="${escapeAttr(
          cfg.ogDescription
        )}" />`
      );
    if (cfg.ogType)
      lines.push(
        `<meta property="og:type" content="${escapeAttr(cfg.ogType)}" />`
      );
    if (cfg.ogImage)
      lines.push(
        `<meta property="og:image" content="${escapeAttr(cfg.ogImage)}" />`
      );
    if (cfg.ogSiteName)
      lines.push(
        `<meta property="og:site_name" content="${escapeAttr(
          cfg.ogSiteName
        )}" />`
      );
    if (cfg.ogUrl)
      lines.push(
        `<meta property="og:url" content="${escapeAttr(cfg.ogUrl)}" />`
      );

    // Twitter
    if (cfg.twitterCard)
      lines.push(
        `<meta name="twitter:card" content="${escapeAttr(cfg.twitterCard)}" />`
      );
    if (cfg.twitterTitle)
      lines.push(
        `<meta name="twitter:title" content="${escapeAttr(
          cfg.twitterTitle
        )}" />`
      );
    if (cfg.twitterDescription)
      lines.push(
        `<meta name="twitter:description" content="${escapeAttr(
          cfg.twitterDescription
        )}" />`
      );
    if (cfg.twitterImage)
      lines.push(
        `<meta name="twitter:image" content="${escapeAttr(
          cfg.twitterImage
        )}" />`
      );

    // Business/geo
    if (cfg.geoRegion)
      lines.push(
        `<meta name="geo.region" content="${escapeAttr(cfg.geoRegion)}" />`
      );
    if (cfg.geoPlacename)
      lines.push(
        `<meta name="geo.placename" content="${escapeAttr(
          cfg.geoPlacename
        )}" />`
      );
    if (cfg.locality)
      lines.push(
        `<meta name="business.contact_data.locality" content="${escapeAttr(
          cfg.locality
        )}" />`
      );
    if (cfg.region)
      lines.push(
        `<meta name="business.contact_data.region" content="${escapeAttr(
          cfg.region
        )}" />`
      );
    if (cfg.country)
      lines.push(
        `<meta name="business.contact_data.country" content="${escapeAttr(
          cfg.country
        )}" />`
      );

    // Canonical
    if (cfg.canonical)
      lines.push(
        `<link rel="canonical" href="${escapeAttr(cfg.canonical)}" />`
      );

    // LD+JSON
    lines.push(
      `<script type="application/ld+json">\n${escapeScript(ldJson)}\n</script>`
    );

    return lines.join("\n");
  }, [cfg, ldJson]);

  // Persist to localStorage so your existing SEO runtime component can read it
  function saveConfig() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
  }

  function resetConfig() {
    setCfg(EMPTY);
    localStorage.removeItem(STORAGE_KEY);
  }

  function copyMetaToClipboard() {
    navigator.clipboard.writeText(metaSnippet);
  }

  function addService() {
    const s = newService.trim();
    if (!s) return;
    setCfg((c) => ({ ...c, services: [...c.services, s] }));
    setNewService("");
  }

  function removeService(i: number) {
    setCfg((c) => ({
      ...c,
      services: c.services.filter((_, idx) => idx !== i),
    }));
  }

  // Common controlled input
  function Input({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    type?: string;
  }) {
    return (
      <label className="block w-full">
        <span className="text-sm text-neutral-300">{label}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-1 w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500"
        />
      </label>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">SEO Wizard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Fill this form, click <strong>Save</strong>. Your runtime{" "}
          <code>SEO</code> component will read it from <code>localStorage</code>{" "}
          and inject tags.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: basic + OG + Twitter */}
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-lg font-medium">Basics</h2>
              <Input
                label="Title"
                value={cfg.title}
                onChange={(v) => setCfg({ ...cfg, title: v })}
              />
              <Input
                label="Description"
                value={cfg.description}
                onChange={(v) => setCfg({ ...cfg, description: v })}
              />
              <Input
                label="Keywords"
                value={cfg.keywords}
                onChange={(v) => setCfg({ ...cfg, keywords: v })}
              />
              <Input
                label="Author"
                value={cfg.author}
                onChange={(v) => setCfg({ ...cfg, author: v })}
              />
              <Input
                label="Robots"
                value={cfg.robots}
                onChange={(v) => setCfg({ ...cfg, robots: v })}
              />
              <Input
                label="Canonical URL"
                value={cfg.canonical}
                onChange={(v) => setCfg({ ...cfg, canonical: v })}
              />
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium">Open Graph</h2>
              <Input
                label="OG Title"
                value={cfg.ogTitle}
                onChange={(v) => setCfg({ ...cfg, ogTitle: v })}
              />
              <Input
                label="OG Description"
                value={cfg.ogDescription}
                onChange={(v) => setCfg({ ...cfg, ogDescription: v })}
              />
              <Input
                label="OG Type"
                value={cfg.ogType}
                onChange={(v) => setCfg({ ...cfg, ogType: v })}
              />
              <Input
                label="OG Image URL"
                value={cfg.ogImage}
                onChange={(v) => setCfg({ ...cfg, ogImage: v })}
              />
              <Input
                label="OG Site Name"
                value={cfg.ogSiteName}
                onChange={(v) => setCfg({ ...cfg, ogSiteName: v })}
              />
              <Input
                label="OG URL"
                value={cfg.ogUrl}
                onChange={(v) => setCfg({ ...cfg, ogUrl: v })}
              />
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium">Twitter</h2>
              <label className="block w-full">
                <span className="text-sm text-neutral-300">Twitter Card</span>
                <select
                  className="mt-1 w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white"
                  value={cfg.twitterCard}
                  onChange={(e) =>
                    setCfg({
                      ...cfg,
                      twitterCard: e.target.value as SeoConfig["twitterCard"],
                    })
                  }
                >
                  <option value="summary">summary</option>
                  <option value="summary_large_image">
                    summary_large_image
                  </option>
                  <option value="app">app</option>
                  <option value="player">player</option>
                </select>
              </label>
              <Input
                label="Twitter Title"
                value={cfg.twitterTitle}
                onChange={(v) => setCfg({ ...cfg, twitterTitle: v })}
              />
              <Input
                label="Twitter Description"
                value={cfg.twitterDescription}
                onChange={(v) => setCfg({ ...cfg, twitterDescription: v })}
              />
              <Input
                label="Twitter Image URL"
                value={cfg.twitterImage}
                onChange={(v) => setCfg({ ...cfg, twitterImage: v })}
              />
            </section>
          </div>

          {/* Right column: Business + LD JSON preview */}
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-lg font-medium">Business & Geo</h2>
              <Input
                label="Geo Region (e.g. TN)"
                value={cfg.geoRegion}
                onChange={(v) => setCfg({ ...cfg, geoRegion: v })}
              />
              <Input
                label="Geo Placename (City)"
                value={cfg.geoPlacename}
                onChange={(v) => setCfg({ ...cfg, geoPlacename: v })}
              />
              <Input
                label="Locality"
                value={cfg.locality}
                onChange={(v) => setCfg({ ...cfg, locality: v })}
              />
              <Input
                label="Region/State"
                value={cfg.region}
                onChange={(v) => setCfg({ ...cfg, region: v })}
              />
              <Input
                label="Country Code (e.g. TN)"
                value={cfg.country}
                onChange={(v) => setCfg({ ...cfg, country: v })}
              />
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium">
                LocalBusiness (Structured Data)
              </h2>
              <Input
                label="Business Name"
                value={cfg.businessName}
                onChange={(v) => setCfg({ ...cfg, businessName: v })}
              />
              <Input
                label="Business Description"
                value={cfg.businessDescription}
                onChange={(v) => setCfg({ ...cfg, businessDescription: v })}
              />
              <Input
                label="Domain (https://...)"
                value={cfg.domain}
                onChange={(v) => setCfg({ ...cfg, domain: v })}
              />
              <Input
                label="Service Area Name"
                value={cfg.serviceAreaName}
                onChange={(v) => setCfg({ ...cfg, serviceAreaName: v })}
              />
              <Input
                label="Price Range ($ - $$$)"
                value={cfg.priceRange}
                onChange={(v) => setCfg({ ...cfg, priceRange: v })}
              />

              <div>
                <span className="text-sm text-neutral-300">Services</span>
                <div className="mt-1 flex gap-2">
                  <input
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    placeholder="Add a service name"
                    className="flex-1 rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <button
                    onClick={addService}
                    type="button"
                    className="rounded-lg border border-violet-600 px-3 py-2 text-sm hover:bg-violet-600/10"
                  >
                    Add
                  </button>
                </div>
                {cfg.services.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {cfg.services.map((s, i) => (
                      <li
                        key={`${s}-${i}`}
                        className="flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-sm"
                      >
                        <span>{s}</span>
                        <button
                          onClick={() => removeService(i)}
                          className="text-neutral-400 hover:text-red-400"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            <section className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={saveConfig}
                  className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-500"
                >
                  Save (localStorage)
                </button>
                <button
                  onClick={resetConfig}
                  className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                >
                  Reset
                </button>
                <button
                  onClick={copyMetaToClipboard}
                  className="rounded-lg border border-violet-600 px-4 py-2 text-sm hover:bg-violet-600/10"
                >
                  Copy Meta + LDJSON
                </button>
              </div>

              <div className="mt-3">
                <p className="text-sm text-neutral-400">
                  Preview (paste into <code>&lt;head&gt;</code>):
                </p>
                <textarea
                  readOnly
                  value={metaSnippet}
                  className="mt-1 h-56 w-full resize-y rounded-lg bg-neutral-950 border border-neutral-800 p-3 text-xs font-mono text-neutral-200"
                />
              </div>
            </section>
          </div>
        </div>

        <hr className="my-8 border-neutral-800" />
        <HowToIntegrate />
      </div>
    </div>
  );
}

function HowToIntegrate() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2>
        How to integrate with your current <code>SEO</code> component
      </h2>
      <ol>
        <li>
          Create a page at <code>app/seo-wizard/page.tsx</code> and export the
          default component from this file. Open the page, fill the form and
          click <strong>Save</strong>.
        </li>
        <li>
          Update your runtime <code>SEO</code> component to read from{" "}
          <code>localStorage.getItem(&quot;seoConfig&quot;)</code>
          and apply values to <code>document.title</code>, meta tags, and
          structured data.
        </li>
      </ol>
      <p>Example snippet for your existing runtime component:</p>
      <pre>{`
// inside useEffect in your SEO runtime component
try {
  const raw = localStorage.getItem('seoConfig');
  if (raw) {
    const cfg = JSON.parse(raw);
    if (cfg.title) document.title = cfg.title;
    // then set meta tags using your existing helper (setMetaTag / setLinkTag)
    // e.g. setMetaTag('description', cfg.description)
    // setMetaTag('og:title', cfg.ogTitle, true) ...
    // finally inject the LD+JSON built from cfg (same mapping as in wizard)
  }
} catch(_) { /* ignore */ }
`}</pre>
      <p className="text-sm text-neutral-400">
        Tip: In Next.js App Router you can also move this to{" "}
        <code>generateMetadata()</code> on a per-route basis for SSR SEO.
      </p>
    </div>
  );
}

// =====================
// 4) Small escaping helpers for safe snippets
// =====================
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function escapeAttr(input: string) {
  return escapeHtml(input).replaceAll('"', "&quot;");
}
function escapeScript(input: string) {
  // prevent closing </script> sequences in JSON
  return input.replaceAll("</script>", "<\\/script>");
}
