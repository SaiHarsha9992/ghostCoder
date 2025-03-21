"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const blogs = {
  "basics-of-coding": {
    embedFile:
      "https://docs.google.com/document/d/1HRd1rc0G8UrRPLePZYB9KFjH2tKSQoGIMoAS9kudXbo/preview", // Embed link
    content:
      "https://docs.google.com/document/d/e/2PACX-1vSl6EgBVhjGyJR9bksPmjlSK6rsLKrp3P3UJLASKEHfybmOITPlLEdcLs-4W3DQSTS7rz4iVYaZWLNw/pub?embedded=true",
  },
  "basic-syntax-and-data-types":{
    embedFile:
      "https://docs.google.com/document/d/1DND8eWqbkRW5TYV5FrpN3UBiLhzzESHwUjDkZF2heg8/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vSpwINQqYHSSP8OKCfsV81wpxyJ7WYEHpF3AUszsdkVxdP_ke6OmpriI1heOzG9LLigtYfCFb_l8riE/pub?embedded=true",
  },

  "operators-and-expressions":{
    embedFile:
      "https://docs.google.com/document/d/1bsmQaEd0-i-rgkeg1GBB_DjNnzpGHCEd-9-SawoFsdI/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vQCDMjOO8Ls2RzmCKnCcIMdBdxurhlBw0EhoPUPwlHzbBRTcc06ZL7aKrRyoum4PB1CybhLKHgQXeb5/pub?embedded=true",
  },
  "condition-statements":{
    embedFile:
      "https://docs.google.com/document/d/1kIXmvg8aOa4kQ3OvWya47qM_HGRy_tqpqsrlNhvkgk4/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vSMnx_73qODhqL-b9J3B9S6Mn5QZKENLE-smvxfRkdKMX5S7cYiLqxr5La_Yf5NS2pWVgyK-LkvBa8e/pub?embedded=true",
  },

  "forloop":{
    embedFile:
      "https://docs.google.com/document/d/1ZaX0WuDXFO47_cqEPjynLoq4pSZJx8qfo7V6DzEF5do/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vR8DbjQeeahwc6DH-o4n_Y-TghnPhgDxyHdaaQn5-rJNLLQnOzbh3V8M7T28EjGxvwY5s998flKKdin/pub?embedded=true",
  },
  "while-and-do-while-loops":{
    embedFile:
      "https://docs.google.com/document/d/1BQUz_eFu5MacgfYgrkixVymkp_rdNZNHsk8LkVjKAC4/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vTs6pWy3PnjJgugCl506ZYRuGbnkvVHCNVJ7gzGIpq6HcjKQaRjMxPyYxiLQdGNeHtCLeuOgf63OUV7/pub?embedded=true",
  },

  "functions":{
    embedFile:
      "https://docs.google.com/document/d/1AwfjTeaanBNUlad8AsE9G_jA_0y4MdHo7-43exnItEw/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vQBRQtAhaBMilSKeLaWNFSJnrF3FAypMFgMvIC_WbjAWBI8zGiFmFf4AVjXMJ-kP2jTC0bLLtZHlFvE/pub?embedded=true",
  },

"recursions":{
    embedFile:
      "https://docs.google.com/document/d/19KxY2qSFUBN8nMv96ERupZ779Dej_pVAddru9pibKHs/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vSg3vuc6G2tFKc8GuHHKagjjA0aUiYn5KSvKq-FeZmw7YLjen64wuhSr5lF9mx1siglsbUTv-qYtkNH/pub?embedded=true",
  },
"bit_manipulation":{
    embedFile:
      "https://docs.google.com/document/d/1v3CXnMYI1jUex02cep2mFDuzN6REcj3IxBiahPrSXww/preview",
    content:
      "https://docs.google.com/document/d/e/2PACX-1vQefGuH7Juvbz-TpGVwfB8TKRi4j4svn4HAIEkkTgb0yqk4TRlwhTGnr0K692VZDFhlXlttPsUXr7Ko/pub?embedded=true",
  },
};

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extract slug from the path
  const blog = blogs[slug];
  const [textContent, setTextContent] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false); // Track speaking state
  const [speechIndex, setSpeechIndex] = useState(0); // Track current position in the text
  const [isMobile, setIsMobile] = useState(false); // Track if user is on mobile

  useEffect(() => {
    const fetchContent = async () => {
      if (blog && blog.content) {
        try {
          const response = await fetch(blog.content);
          const html = await response.text();

          // Extract text from HTML using DOMParser
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          let text = doc.body.innerText; // Get all readable text from the document
          text = text.slice(5);
          setTextContent(text);
        } catch (error) {
          console.error("Failed to fetch or parse content:", error);
        }
      }
    };

    fetchContent();

    // Check screen width to determine if the user is on a mobile device
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile(); // Check on initial render
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [blog]);

  const handleReadText = () => {
    if (isSpeaking) {
      // Stop current speech
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      if (textContent) {
        const utterance = new SpeechSynthesisUtterance(
          textContent.slice(speechIndex)
        );

        // Update the index as the text is being read
        utterance.onboundary = (event) => {
          if (event.charIndex !== undefined) {
            setSpeechIndex(speechIndex + event.charIndex);
          }
        };

        // Reset state when speech ends
        utterance.onend = () => setIsSpeaking(false);

        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      } else {
        console.error("No text content available for reading.");
      }
    }
  };

  const handleReadFromStart = () => {
    speechSynthesis.cancel(); // Stop any current speech
    setSpeechIndex(0); // Reset the index to the start
    setIsSpeaking(false); // Reset speaking state

    if (textContent) {
      const utterance = new SpeechSynthesisUtterance(textContent);

      // Update the index as the text is being read
      utterance.onboundary = (event) => {
        if (event.charIndex !== undefined) {
          setSpeechIndex(event.charIndex);
        }
      };

      // Reset state when speech ends
      utterance.onend = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      console.error("No text content available for reading.");
    }
  };

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
          className="w-full h-[80vh] sm:h-[100vh] md:h-[80vh] lg:h-[90vh] border rounded-2xl mx-auto shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
          title="Blog Content"
        ></iframe>

        {/* Conditionally render buttons based on isMobile */}
        {!isMobile && (
          <div className="fixed top-1/2 right-4 flex flex-col space-y-4 sm:space-y-2 sm:right-2">
            <button
              onClick={handleReadText}
              className={`px-4 py-2 rounded-md shadow-lg text-xs sm:text-sm ${
                isSpeaking
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              {isSpeaking ? "Stop Reading" : "Read Aloud"}
            </button>

            <button
              onClick={handleReadFromStart}
              className="px-4 py-2 rounded-md shadow-lg bg-green-600 hover:bg-green-700 text-xs sm:text-sm text-white"
            >
              Start from First
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
