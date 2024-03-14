import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavMenu from "./component/NavMenu";
import Footer from "./component/Footer";
import CallToAction from "./component/CallToAction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <Providers>
        <body className={inter.className}>
        <NavMenu/>
        {children}
        <CallToAction/>
        <Footer/>
        </body>
      </Providers>
    </html>
  );
}
