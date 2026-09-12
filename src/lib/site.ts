/**
 * Central content configuration for the site.
 * All copy is derived exclusively from the Dr. Maya Reynolds, PsyD profile document.
 */

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  brandFirst: "Maya Reynolds",
  brandSecond: "Clinical Psychologist · PsyD",
  tagline: "Licensed Clinical Psychologist",
  url: "https://www.drmayareynolds.com",
  email: "info@mayareynoldspsyd.com",
  phone: "(310) 555-0192",
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    full: "123th Street 45 W, Santa Monica, CA 90401",
    country: "US",
  },
  geo: {
    latitude: 34.0195,
    longitude: -118.4912,
  },
  metaTitle:
    "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout — Santa Monica, CA",
  metaDescription:
    "Dr. Maya Reynolds, PsyD offers warm, evidence-based therapy in Santa Monica, CA. Specializing in anxiety, trauma (EMDR), and burnout. In-person & telehealth.",
  ogTitle:
    "Dr. Maya Reynolds, PsyD — Therapy for Anxiety, Trauma & Burnout in Santa Monica",
  ogDescription:
    "Compassionate, evidence-based therapy for adults, professionals, and creatives in Santa Monica, CA. In-person sessions and California-wide secure telehealth.",
  serving:
    "Serving Santa Monica, Venice, West Los Angeles, & communities across California",
  description:
    "Dr. Maya Reynolds, PsyD offers warm, evidence-based therapy in Santa Monica, CA. Specializing in anxiety, trauma (EMDR), and burnout. In-person & telehealth.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
] as const;

export const services = [
  {
    title: "Anxiety & Panic",
    slug: "anxiety-panic",
    text: "Constant worry, tension in your body, difficulty sleeping, or a sense that you're always bracing for something to go wrong — anxiety can be exhausting. In therapy, we'll gently untangle the patterns that keep it going, so you can feel calmer, more grounded, and more at ease in your daily life.",
  },
  {
    title: "Trauma & EMDR",
    slug: "trauma-emdr",
    text: "Whether you've lived through a single-incident trauma or carry more complex, long-standing experiences, we'll move at a careful pace with an emphasis on safety and stabilization. EMDR and other evidence-based approaches help reprocess painful memories, so you can regain a sense of control, and hope.",
  },
  {
    title: "Burnout & Perfectionism",
    slug: "burnout-perfectionism",
    text: "For entrepreneurs, creatives, and professionals living with high internal pressure, therapy offers room to step out of the cycle of pushing through. Together, we'll develop more sustainable ways of living and working — and help you reconnect with yourself along the way.",
  },
] as const;

export const audiences = [
  {
    title: "Adults",
    image: "/images/help-adults.jpg",
    alt: "Comfortable armchair with soft throw blanket in Dr. Maya Reynolds' Santa Monica therapy office for adult counseling",
    text: "Feeling overwhelmed, anxious, or emotionally on edge? Working with adults is the heart of my practice — a compassionate space to make sense of what you're feeling, address it at the root, and move forward with greater clarity and confidence.",
  },
  {
    title: "High Achievers & Professionals",
    image: "/images/help-professionals.jpg",
    alt: "Warm desk corner with open journal and tea in natural sunlight representing burnout therapy for high achievers",
    text: "Many of my clients are thoughtful, capable people who seem “functional” on the outside while quietly struggling with worry, pressure, and exhaustion. Therapy can help you keep what works — and build a life that feels sustainable from the inside, too.",
  },
  {
    title: "Entrepreneurs & Creatives",
    image: "/images/help-creatives.jpg",
    alt: "Artful studio interior with ceramics and dried flora reflecting therapy for entrepreneurs and creatives in Los Angeles",
    text: "Entrepreneurs, creatives, and professionals often spend years pushing through stress until they feel disconnected from themselves. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
  },
] as const;

export const expertise = [
  "Anxiety",
  "Panic",
  "Trauma",
  "EMDR",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Difficulty Sleeping",
  "Confidence & Self-Worth",
  "Relationships & Safety",
  "Mindfulness & CBT",
  "…And More",
] as const;
