"use client";
import Home from "./components/Home"
import { SessionProvider } from "next-auth/react";
export default function Main() {
  return (
    <>
      
        <SessionProvider><Home/></SessionProvider>
    </>
  );
}
