import { useEffect } from "react";

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
    areaServed: string;
    availableLanguage: string;
  };
  sameAs?: string[];
  address?: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
}

interface WebSiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": string;
    target: string | { "@type": string; urlTemplate: string };
    "query-input"?: string;
  };
}

interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
  priceRange?: string;
  openingHours?: string;
}

type SchemaType = OrganizationSchema | WebSiteSchema | LocalBusinessSchema;

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "LocalBusiness";
  data?: Partial<SchemaType>;
}

const baseOrganizationData: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clarivise",
  url: "https://clarivise.in",
  description: "AI solutions, trading insights, education, wellbeing, and social impact. Transform your business with AI-powered solutions designed for purpose and wisdom.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9960839401",
    contactType: "customer service",
    email: "clarivise06@gmail.com",
    areaServed: "IN",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressCountry: "IN",
  },
};

const baseWebSiteData: WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clarivise",
  url: "https://clarivise.in",
  description: "AI solutions, trading insights, education, wellbeing, and social impact. Transform your business with AI-powered solutions designed for purpose and wisdom.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://clarivise.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const baseLocalBusinessData: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Clarivise",
  url: "https://clarivise.in",
  telephone: "+91-9960839401",
  email: "clarivise06@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressCountry: "IN",
  },
  priceRange: "$$",
};

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let schemaData: SchemaType;

    switch (type) {
      case "Organization":
        schemaData = { ...baseOrganizationData, ...data } as OrganizationSchema;
        break;
      case "WebSite":
        schemaData = { ...baseWebSiteData, ...data } as WebSiteSchema;
        break;
      case "LocalBusiness":
        schemaData = { ...baseLocalBusinessData, ...data } as LocalBusinessSchema;
        break;
      default:
        return;
    }

    const existingScript = document.querySelector(`script[data-schema="${type}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", type);
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[data-schema="${type}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
