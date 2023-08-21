"use client";
import Header from "../components/Header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
