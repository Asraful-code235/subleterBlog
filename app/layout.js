"use client";
import { Inter } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./globals.scss";
import TanstackQueryProvider from "./TanstackQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <TanstackQueryProvider>
          <main>{children}</main>
        </TanstackQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
