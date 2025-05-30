import Navbar from "./components/navbar";
import "./globals.css";

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
        <title>Austen Design House</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
