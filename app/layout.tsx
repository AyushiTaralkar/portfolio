import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayushi Taralkar — AI, Product & Engineering",
  description: "I build AI-powered experiences that people actually use."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
