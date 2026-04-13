import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FastTrack Literacy™ — CHEETAH® | Every Child Can Read",
  description: "FastTrack Literacy™ by CHEETAH® is a structured, evidence-based reading program for children ages 3–8. Combining Science of Reading with reggae songs, decodable books, and AI technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
