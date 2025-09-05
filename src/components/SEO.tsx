"use client";
import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    // Set page title
    document.title = ""; // TODO: Add your page title here - e.g., "Your Business Name - Professional Services"
  }, []);

  useEffect(() => {
    // Helper function to create or update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Helper function to create or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (link) {
        link.setAttribute("href", href);
      } else {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        link.setAttribute("href", href);
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    setMetaTag("description", ""); // TODO: Add your page description - e.g., "Professional services for your business needs"
    setMetaTag("keywords", ""); // TODO: Add your keywords - e.g., "keyword1, keyword2, keyword3"
    setMetaTag("author", ""); // TODO: Add your business/author name
    setMetaTag(
      "viewport",
      "width=device-width, initial-scale=1, shrink-to-fit=no"
    );

    // Robots meta tag
    setMetaTag("robots", "index, follow");

    // Open Graph meta tags
    setMetaTag("og:title", "", true); // TODO: Add your OG title - e.g., "Your Business Name - Professional Services"
    setMetaTag("og:description", "", true); // TODO: Add your OG description (same as meta description usually)
    setMetaTag("og:type", "website", true);
    setMetaTag("og:image", "", true); // TODO: Add your OG image URL - e.g., "/images/og-image.jpg"
    setMetaTag("og:site_name", "", true); // TODO: Add your site name
    setMetaTag("og:url", "", true); // TODO: Add your site URL - e.g., "https://yourdomain.com"

    // Twitter Card meta tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", ""); // TODO: Add your Twitter title (same as OG title usually)
    setMetaTag("twitter:description", ""); // TODO: Add your Twitter description
    setMetaTag("twitter:image", ""); // TODO: Add your Twitter image URL

    // Business-specific meta tags
    setMetaTag("geo.region", ""); // TODO: Add your region - e.g., "US"
    setMetaTag("geo.placename", ""); // TODO: Add your city - e.g., "New York"
    setMetaTag("business.contact_data.locality", ""); // TODO: Add your city
    setMetaTag("business.contact_data.region", ""); // TODO: Add your state
    setMetaTag("business.contact_data.country", ""); // TODO: Add your country code - e.g., "US"

    // Canonical URL
    setLinkTag("canonical", ""); // TODO: Add your canonical URL - e.g., "https://yourdomain.com"

    // Default organization structured data
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "", // TODO: Add your business name
      description: "", // TODO: Add your business description
      "@id": "", // TODO: Add your domain - e.g., "https://yourdomain.com"
      url: "", // TODO: Add your domain - e.g., "https://yourdomain.com"
      serviceArea: {
        "@type": "Place",
        name: "", // TODO: Add your service area - e.g., "New York City"
      },
      priceRange: "", // TODO: Add your price range - e.g., "$$" or "$$$"
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "", // TODO: Add your services category - e.g., "Professional Services"
        itemListElement: [
          // TODO: Add your services - example:
          // {
          //   "@type": "Offer",
          //   itemOffered: {
          //     "@type": "Service",
          //     name: "Service Name 1",
          //   },
          // },
        ],
      },
    };

    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(defaultStructuredData);
    document.head.appendChild(script);

    // Font loading (optional)
    // TODO: Add your Google Fonts or custom font URL if needed
    // const fontLink = document.createElement("link");
    // fontLink.href = "https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap";
    // fontLink.rel = "stylesheet";
    // document.head.appendChild(fontLink);

    // Cleanup function
    return () => {
      // Optional: Clean up dynamic elements when component unmounts
    };
  }, []);

  return null;
};

export default SEO;
