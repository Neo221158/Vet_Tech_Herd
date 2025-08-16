import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Vet Tech Herd - Veterinarians in Technology",
  description: "A professional community connecting veterinarians working in the technology industry. Join us to collaborate, share knowledge, and advance veterinary tech innovation.",
  keywords: ["veterinary", "technology", "community", "veterinarians", "tech", "innovation"],
  authors: [{ name: "The Vet Tech Herd" }],
  openGraph: {
    title: "The Vet Tech Herd - Veterinarians in Technology",
    description: "A professional community connecting veterinarians working in the technology industry.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
