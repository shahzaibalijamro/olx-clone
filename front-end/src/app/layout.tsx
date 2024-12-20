import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.StrictMode>
      <html className="scrollbar scrollbar-thumb-[#686868] scrollbar-track-[#424242] scrollbar-[20px]" lang="en">
        <body
        >
          <Header />
          {children}
        </body>
      </html>
    </React.StrictMode>
  );
}
