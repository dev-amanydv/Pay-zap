import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "../AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlashVault – Secure & Instant Payment Transfers",
  description:
    "FlashVault is a modern payment platform that enables fast, secure, and seamless money transfers. Send and receive money instantly with advanced encryption and real-time tracking.",
  keywords: [
    "FlashVault",
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
    title: "FlashVault – Secure & Instant Payment Transfers",
    description:
      "Experience hassle-free digital payments with FlashVault. Send, receive, and manage money effortlessly on a secure and intuitive platform.",
    url: "https://flashvault.app", // replace with your actual URL
    siteName: "flashvault",
    images: [
      {
        url: "https://flashvault.app/og-image.png", // update this to your actual OG image
        width: 1200,
        height: 630,
        alt: "flashvault - Send and receive money easily",
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
        <body className={inter.className}>
        <AppbarClient />
        <div className="px-4 sm:px-16 py-4 sm:py-8">
        {children}
        </div>
        </body>
      </Providers>
    </html>
  );
}
