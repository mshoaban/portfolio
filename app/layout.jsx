import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const siteUrl = "https://muhammadshoaban.vercel.app";
const title = "Muhammad Shoaban — Full-Stack Developer | Laravel, React & Automation";
const description =
  "Independent Full-Stack Developer Muhammad Shoaban builds Laravel + React web apps, SaaS platforms, APIs, and business automation that replace manual work. 15+ projects shipped across healthcare, machinery, finance, and social platforms.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Muhammad Shoaban Portfolio",
  authors: [{ name: "Muhammad Shoaban", url: siteUrl }],
  creator: "Muhammad Shoaban",
  keywords: [
    "Muhammad Shoaban",
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "SaaS Development",
    "REST API Development",
    "GoHighLevel Automation",
    "Freelance Web Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Shoaban",
    title,
    description,
    images: [
      {
        url: "/me-up.png",
        width: 800,
        height: 800,
        alt: "Muhammad Shoaban",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/me-up.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Shoaban",
  url: siteUrl,
  image: `${siteUrl}/me-up.png`,
  jobTitle: "Full-Stack Developer",
  email: "mailto:mshoaban09@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/in/muhammad-shoaban/",
    "https://github.com/mshoaban",
  ],
  knowsAbout: [
    "Laravel",
    "React",
    "Node.js",
    "REST APIs",
    "SaaS Development",
    "GoHighLevel",
    "n8n",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Azure",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ghazi University",
  },
};

export default function RootLayout({ children }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
