import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/layout/Cursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashu-Cipher | Hacker",
  description: "Hacker Portfolio by Ashu-Cipher",
  verification: {
    google: 'MdKQ3_DliKiATQ-tzlhBQKJTqkmfbQSJzCmojvW0WIM',
  },
  openGraph: {
    title: "Ashu-Cipher | Hacker",
    description: "Hacker Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark">
      <body className="bg-hacker-bg text-white font-mono antialiased scanline-overlay">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
