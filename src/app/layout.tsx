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
  title:
    "Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: site.description,
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "anxiety therapy Santa Monica",
    "EMDR therapy Santa Monica",
    "trauma therapy California",
    "burnout therapy for professionals",
    "perfectionism counseling",
    "telehealth therapist California",
    "Dr. Maya Reynolds PsyD",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Therapy for Anxiety, Trauma & Burnout in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: site.description,
    url: "/",
    siteName: site.name,
    images: [
      {
        url: "/images/maya-portrait.jpg",
        width: 1000,
        height: 1500,
        alt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, CA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Therapy for Anxiety, Trauma & Burnout in Santa Monica | Dr. Maya Reynolds, PsyD",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/* ---- Structured data: local practice (SEO) ---- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/maya-portrait.jpg`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Anxiety & Panic Therapy" },
    { "@type": "MedicalTherapy", name: "Trauma & EMDR Therapy" },
    { "@type": "MedicalTherapy", name: "Burnout & Perfectionism Counseling" },
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
