"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function InterviewMaster100Page() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <>
      <Header className="w-full top-0" />

      <main className="max-w-4xl mx-auto py-16 px-16 text-white border border-white m-8 bg-[#2a3d41]">
        <h1 className="text-3xl font-bold mb-2">Interview Master 100 - ghostCoder</h1>

        {/* Like Button Section */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleLike}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow"
          >
            ❤️ Like ({likes})
          </button>
        </div>

        {/* ... (your existing content) ... */}

        <Footer className="w-full bottom-0" />
      </main>
    </>
  );
}
