"use client";

import React from "react";

const BlogFromFileIframe = () => {
  const fileEmbedUrl =
    "https://docs.google.com/document/d/1HRd1rc0G8UrRPLePZYB9KFjH2tKSQoGIMoAS9kudXbo/preview"; // Replace with your file ID

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Content</h1>
      <div className="relative" style={{ height: "100vh" }}>
        <iframe
          src={fileEmbedUrl}
          width="100%"
          height="100%"
          allow="autoplay"
          className="border rounded"
          title="Blog Content"
          style={{ border: "none", height: "100vh", width: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default BlogFromFileIframe;
