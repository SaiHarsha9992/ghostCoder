"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#040709] fixed w-full z-20 top-0 start-0 sticky">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3">
          <Image
            src="/Navbar Logo.png"
            width={150}
            height={100}
            alt="ghostCoder Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
          <a href="/blogs" className="text-white hover:text-gray-300">
            Blogs
          </a>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {!session ? (
            <>
              <button
                onClick={() => signIn()}
                className="text-black bg-white hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] font-semibold rounded-lg px-4 py-2"
              >
                Sign In
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              {/* User Avatar */}
              <Image
                src={session?.user?.image || "/ghost (6) (1).png"} // Default avatar fallback
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-500"
              />
              {/* User Name */}
              <p className="text-white font-medium">
                {session.user.name.split(" ")[0]}
              </p>
              {/* Sign Out Button */}
              <button
                onClick={() => signOut()}
                className="text-black bg-white hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] rounded-lg px-4 py-2"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#040709] text-white p-4 space-y-4">
          <a href="/" className="block hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block hover:text-gray-300">
            About
          </a>
          <a href="/services" className="block hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="block hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
