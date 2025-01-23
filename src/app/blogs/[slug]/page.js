"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const blogs = {
  "basics-of-coding": {
    embedFile:
      "https://docs.google.com/document/d/1HRd1rc0G8UrRPLePZYB9KFjH2tKSQoGIMoAS9kudXbo/preview", // Use embed link here
  },
};

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extract slug from the path
  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="bg-[#1a2629] min-h-screen flex items-center justify-center text-[#ffffff]">
        <h1 className="text-2xl font-bold">404: Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1a2629] text-[#e5e5e5] min-h-screen">
      <Header />
      <div className="relative w-full px-4 py-8 max-w-screen-lg mx-auto">
        <iframe
          src={blog.embedFile}
          aria-hidden="true"
          allow="autoplay"
          className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] border rounded-2xl mx-auto shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
          title="Blog Content"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
