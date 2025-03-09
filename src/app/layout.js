import "./globals.css";
import { Comfortaa } from "next/font/google";
import { Metadata } from "next";
import SessionProviderWrapper from "./SessionProviderWrapper"; // Import the wrapper

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ghostCoder",
    template: "%s - ghostCoder",
  },
  description: "Learn fast Coding and DSA",
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
