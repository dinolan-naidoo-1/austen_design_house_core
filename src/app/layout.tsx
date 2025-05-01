import type { Metadata } from "next";
import "./globals.css";

// This is the correct way to set metadata in Next.js App Router
export const metadata: Metadata = {
  title: "Austen Design House",
  description: "Austen Design House",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
