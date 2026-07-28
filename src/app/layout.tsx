import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Laughing Wallet — money made simple, and kind of funny",
  description:
    "Short cartoon videos and simple planning tools that walk you through every money milestone, from your first apartment to a confident retirement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts load from Google's CDN at runtime with a system-font
            fallback, so the build never depends on network access. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
