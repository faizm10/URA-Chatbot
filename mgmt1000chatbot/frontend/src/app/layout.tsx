import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from '@/components/NavBar'
// import Sidebar from '@/components/Sidebar/Sidebar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TA AI - MGMT1000",
  description: "ChatBot",
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
