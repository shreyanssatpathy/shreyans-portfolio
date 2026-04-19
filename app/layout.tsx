import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreyans Satpathy — Data Engineer",
  description:
    "Data engineer architecting scalable data platforms that power AI-driven systems. UCLA Anderson · Mercedes-Benz R&D · Los Angeles, CA.",
  openGraph: {
    title: "Shreyans Satpathy — Data Engineer",
    description:
      "Architecting data platforms that power AI-driven systems and enable real-world business decisions at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
