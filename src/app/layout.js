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
  openGraph: {
    title: "ghostCoder",
    description: "Learn fast Coding and DSA",
    url: "https://ghost-coderr.vercel.app",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/367c78b8-b443-4d90-9b92-c620cdc56df3.png?token=5SpY9URG8XKidAjLpCYr5BzaWPBlN2H0yVqa_xoXVwc&height=630&width=1200&expires=33277508177",
        width: 1200,
        height: 630,
        alt: "ghostCoder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ghostCoder",
    description: "Learn fast Coding and DSA",
    images: [
      "https://opengraph.b-cdn.net/production/images/367c78b8-b443-4d90-9b92-c620cdc56df3.png?token=5SpY9URG8XKidAjLpCYr5BzaWPBlN2H0yVqa_xoXVwc&height=630&width=1200&expires=33277508177",
    ],
  },
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
