import type { Metadata } from "next";
import Navbar from "./components/navbar";
import "./globals.css";
import Head from "next/head";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>View</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
