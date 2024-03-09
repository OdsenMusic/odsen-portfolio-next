import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const montserrat = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odsen",
  description: "Joel Oliver's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
