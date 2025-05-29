import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "../AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayZap – Secure & Instant Payment Transfers",
  description:
    "PayZap is a modern payment platform that enables fast, secure, and seamless money transfers. Send and receive money instantly with advanced encryption and real-time tracking.",
  keywords: [
    "PayZap",
    "Payment App",
    "Money Transfer",
    "Send Money",
    "Receive Payments",
    "Secure Payments",
    "Digital Wallet",
    "Online Payments",
    "Fast Money Transfer",
    "Mobile Payments"
  ],
  authors: [{ name: "Aman Yadav", url: "https://github.com/dev-amanydv" }],
  creator: "Aman Yadav",
  openGraph: {
    title: "PayZap – Secure & Instant Payment Transfers",
    description:
      "Experience hassle-free digital payments with PayZap. Send, receive, and manage money effortlessly on a secure and intuitive platform.",
    url: "https://payzap.app", // replace with your actual URL
    siteName: "PayZap",
    images: [
      {
        url: "https://payzap.app/og-image.png", // update this to your actual OG image
        width: 1200,
        height: 630,
        alt: "PayZap - Send and receive money easily",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <AppbarClient />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
