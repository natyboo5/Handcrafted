import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Web platform where you can find the best handmade products. Ideal for artisans and craftsmen to display and sell their unique items on the market.",
  authors: [
    { name: "Karol Bracho" },
    { name: "Stéphane Lima e Lima" },
    { name: "Diana Quispe" },
    { name: "David Peña" },
    { name: "Natalia Paredes" }
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
