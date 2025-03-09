// src/app/layout.js (Server Component)
import "./globals.css";
import { Comfortaa } from "next/font/google";
import { Metadata } from "next";
import SessionProviderWrapper from "./SessionProviderWrapper"; // Import the wrapper

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "GhostCoder",
  description: "Your go-to platform for learning DSA, coding, and technology for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
