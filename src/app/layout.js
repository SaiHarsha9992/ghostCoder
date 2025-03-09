// src/app/layout.js (Server Component)
import "./globals.css";
import { Comfortaa } from "next/font/google";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: {
    default: "ghostCoder",
    template: "%s - ghostCoder",
  },
  description: "Learn fast Coding and DSA",
};

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
