import { siteConfig } from './config';

export const generateOrganizationSchema = (config: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${config.url}/#organization`,
    name: config.name,
    url: config.url,
    description: config.description,
    sameAs: [
      config.links.facebook
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: config.contact.phone,
      contactType: "customer service",
      email: config.contact.email,
      areaServed: ["CA-QC", "CA"],
      availableLanguage: ["French", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "441 rue Ste-Hélène, suite #2",
      addressLocality: "Longueuil",
      addressRegion: "QC",
      postalCode: "J4K 3R3",
      addressCountry: "CA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.52247406361339,
      longitude: -73.51498672346976
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.52247406361339,
        longitude: -73.51498672346976
      },
      geoRadius: "100000"
    },
    image: `${config.url}/favicon.png`,
    priceRange: "$$"
  };
};

export const generateWebsiteSchema = (config: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${config.url}/#website`,
    name: config.name,
    url: config.url,
    description: config.description,
    publisher: {
      "@id": `${config.url}/#organization`
    },
    inLanguage: "fr-CA",
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateServiceSchema = (service: any, config: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${config.url}/#organization`
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.52247406361339,
        longitude: -73.51498672346976
      },
      geoRadius: "100000"
    },
    image: service.image,
    category: service.category,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${config.url}/services/${service.slug}`,
      servicePhone: config.contact.phone,
      serviceLocation: {
        "@type": "Place",
        name: config.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: "441 rue Ste-Hélène, suite #2",
          addressLocality: "Longueuil",
          addressRegion: "QC",
          postalCode: "J4K 3R3",
          addressCountry: "CA"
        }
      }
    }
  };
};

export const generateBreadcrumbSchema = (items: any[], config: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${config.url}${item.path}`
    }))
  };
};

export const generateEventSchema = (event: any, config: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    image: event.images[0],
    url: `${config.url}/evenements/${event.slug}`,
    organizer: {
      "@type": "Organization",
      name: config.name,
      url: config.url
    },
    location: {
      "@type": "Place",
      name: config.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "441 rue Ste-Hélène, suite #2",
        addressLocality: "Longueuil",
        addressRegion: "QC",
        postalCode: "J4K 3R3",
        addressCountry: "CA"
      }
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "CAD",
      validFrom: new Date().toISOString()
    }
  };
};