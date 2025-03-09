// src/components/ClientLayout.jsx (or .tsx)
"use client";

import { Comfortaa } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export default function ClientLayout({ children }) {
  return (
    <body className={comfortaa.className}>
      <SessionProvider>{children}</SessionProvider>
    </body>
  );
}
