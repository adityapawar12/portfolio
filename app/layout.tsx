import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Aditya Pawar | Fullstack Developer",
  description:
    "Aditya Pawar is a passionate Fullstack Developer based in Mumbai, specializing in React.js and Node.js. Explore my portfolio to see my projects and skills in web development.",
  // authors: ["Aditya Pawar"],
  openGraph: {
    title: "Aditya Pawar | Fullstack Developer",
    description:
      "Aditya Pawar is a passionate Fullstack Developer based in Mumbai, specializing in React.js and Node.js. Explore my portfolio to see my projects and skills in web development.",
    url: "https://protfolio-self-iota.vercel.app/",
  },
  twitter: {
    title: "Aditya Pawar | Fullstack Developer",
    description:
      "Aditya Pawar is a passionate Fullstack Developer based in Mumbai, specializing in React.js and Node.js. Explore my portfolio to see my projects and skills in web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
