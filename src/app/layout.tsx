import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/* ---- Brand typography ---- */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

/* ---- SEO ---- */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.metaTitle,
    template: `%s | ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  keywords: [
    // Local & Location
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "licensed clinical psychologist Santa Monica",
    "therapy Santa Monica 90401",
    "counseling Santa Monica",
    "West Los Angeles therapist",
    "Venice CA therapy",
    "Pacific Palisades therapy",
    // Clinical specialties & modalities
    "anxiety therapy Santa Monica",
    "panic attack counselor Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapy Santa Monica CA",
    "burnout counseling for professionals",
    "perfectionism therapy Los Angeles",
    "chronic stress management",
    "cognitive behavioral therapy Santa Monica",
    "mindfulness-based therapy",
    // Target audiences
    "therapy for adults Santa Monica",
    "therapy for high achievers",
    "counseling for entrepreneurs",
    "therapy for creatives Los Angeles",
    // Service delivery
    "in-person therapy Santa Monica",
    "telehealth therapist California",
    "online therapy California",
    "Dr. Maya Reynolds PsyD",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/maya-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, CA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
    images: ["/images/maya-portrait.jpg"],
    creator: "@mayareynoldspsyd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ---- Structured Data: JSON-LD (@graph Schema.org) ---- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Psychologist", "MedicalBusiness", "LocalBusiness"],
      "@id": `${site.url}/#practice`,
      name: site.name,
      legalName: "Dr. Maya Reynolds Psychological Services",
      alternateName: "Maya Reynolds Therapy",
      url: site.url,
      description: site.metaDescription,
      image: `${site.url}/images/maya-portrait.jpg`,
      telephone: site.phone,
      email: site.email,
      priceRange: "$$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Credit Card, Debit Card, HSA, FSA",
      isAcceptingNewPatients: true,
      medicalSpecialty: [
        "https://health-lifesci.schema.org/PsychiatryOrPsychology",
        "https://health-lifesci.schema.org/ClinicalPsychology",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Santa Monica",
          sameAs: "https://en.wikipedia.org/wiki/Santa_Monica,_California",
        },
        {
          "@type": "City",
          name: "Venice",
          sameAs: "https://en.wikipedia.org/wiki/Venice,_Los_Angeles",
        },
        {
          "@type": "City",
          name: "West Los Angeles",
        },
        {
          "@type": "AdministrativeArea",
          name: "California",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Clinical Psychological & Counseling Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Anxiety & Panic Therapy",
              description:
                "Evidence-based psychotherapy for panic disorder, chronic worry, and nervous system regulation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Trauma & EMDR Therapy",
              description:
                "Phase-oriented trauma therapy and Eye Movement Desensitization and Reprocessing (EMDR) for single-incident and complex trauma.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: "Burnout & Perfectionism Counseling",
              description:
                "Psychological counseling tailored for high achievers, entrepreneurs, and creatives experiencing chronic workplace exhaustion and perfectionism.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#dr-maya-reynolds`,
      name: site.name,
      jobTitle: "Licensed Clinical Psychologist",
      honorificSuffix: "PsyD",
      worksFor: {
        "@id": `${site.url}/#practice`,
      },
      image: `${site.url}/images/maya-portrait.jpg`,
      description: site.description,
      knowsAbout: [
        "Cognitive Behavioral Therapy (CBT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Anxiety Disorders",
        "Trauma Recovery",
        "Burnout Prevention",
        "Mindfulness-Based Stress Reduction",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.metaDescription,
      publisher: {
        "@id": `${site.url}/#practice`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${vibes.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
