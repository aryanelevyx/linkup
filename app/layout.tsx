import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkUp | Founder Networking",
  description: "A location-based networking dashboard for entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
