import type { Metadata } from "next";
import { dm_sans } from "./font";
import "./globals.css";
import { Providers } from "./providers";
import NavMenu from "./component/NavMenu";
import Footer from "./component/Footer";
import CallToAction from "./component/CallToAction";

export const metadata: Metadata = {
  title: "Insta Tech",
  description: "Get latest news about tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <Providers>
        <body className={dm_sans.className}>
        <NavMenu/>
        {children}
        <CallToAction/>
        <Footer/>
        </body>
      </Providers>
    </html>
  );
}
