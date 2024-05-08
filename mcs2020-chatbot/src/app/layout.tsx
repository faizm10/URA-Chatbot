import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/page";
import Footer from "./components/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI ChatBot",
  description: "All-In-One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
