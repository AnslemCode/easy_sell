import type { Metadata } from "next";
import { Nunito, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getCanonicalUrl } from "@/utils";
import { url } from "inspector";

const nunito = Nunito({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl()),
  title: "Easy Sell",
  description:
    "Discover the power of simplicity with Easy Sell - the ultimate solution for effortlessly selling products. Unlock convience and boost your sale",
  openGraph: {
    images: [`/assets/og-image.png`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header font={josefin_sans.className} />
        <div className="bg-gray-951 py-12">{children}</div>
        <Footer font={josefin_sans.className} />
      </body>
    </html>
  );
}
