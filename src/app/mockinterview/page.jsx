"use client";

export default function Page() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://smart-meet-smoky.vercel.app/"
        className="w-full h-full border-none"
        allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
