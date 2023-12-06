import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RainbowProviders } from "./rainbowproviders";

import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Manager | PledgePost",
  description: "Interface for managing PledgePost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RainbowProviders>
          <Header />
          {children}
        </RainbowProviders>
        <ToastContainer newestOnTop />
      </body>
    </html>
  );
}
