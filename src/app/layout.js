
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
