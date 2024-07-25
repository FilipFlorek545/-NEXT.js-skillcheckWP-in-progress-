import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLinks from "@/app/ui/navLinks";
import Footer from "@/app/ui/footer";
import {CompanyLogo} from "@/app/ui/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-gen Wonder",
  description: "Next-gen web designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="top">
      <CompanyLogo />
      <NavLinks/>
    </div>
      {children}
      <Footer />
    </body>
    </html>
  );
}
