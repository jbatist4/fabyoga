import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://fabyoga.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yoga em João Pessoa | FabYoga – Casa Shanti, Bessa",
  description:
    "Aulas de yoga em João Pessoa com Fabiane Batista, instrutora de Yoga e Bacharel em Enfermagem. Yoga Integrativo (ter/qui) e Yoga Dinâmico (sáb) na Casa Shanti, Bessa. Agende sua aula experimental grátis!",
  keywords: [
    "yoga joão pessoa",
    "yoga em joão pessoa",
    "aulas de yoga joão pessoa",
    "yoga bessa",
    "yoga integrativo",
    "yoga dinâmico",
    "aulas de yoga",
    "FabYoga",
    "Fabiane Batista",
    "Casa Shanti",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yoga em João Pessoa | FabYoga",
    description:
      "Aulas de yoga em João Pessoa com Fabiane Batista na Casa Shanti, Bessa. Agende sua aula experimental grátis!",
    url: SITE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: "FabYoga",
    images: [
      {
        url: "/images/fabiane-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FabYoga – Fabiane Batista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga em João Pessoa | FabYoga",
    description: "Aulas de yoga em João Pessoa com Fabiane Batista na Casa Shanti, Bessa.",
    images: ["/images/fabiane-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "FabYoga – Yoga em João Pessoa",
  description:
    "Aulas de yoga em João Pessoa: Yoga Integrativo e Yoga Dinâmico com Fabiane Batista na Casa Shanti, Bessa.",
  url: SITE_URL,
  image: `${SITE_URL}/images/fabiane-hero.jpg`,
  telephone: "+5583993243577",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Casa Shanti, Bessa",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.0751778,
    longitude: -34.8451656,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "07:15",
      closes: "08:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:15",
      closes: "07:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X2GDY6HJQ5"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-X2GDY6HJQ5');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
