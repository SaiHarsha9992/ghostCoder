"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

const roadmaps = [
  // 🔥 Full Stack Development
  { title: "Full Stack Developer", id: "1gIpK1dtbOlleyCz2Z6LtR-eqVpAWMhHI" },
  { title: "Frontend Development", id: "1ooD_W7VRf7rFNKQj6WtaM3zmqO0RHPQt" },
  { title: "Backend Development", id: "1XRBfYwA4fe9Lup5UCg8q_sG7eCsBJVpV" },

  // 🤖 AI/ML Engineer
  { title: "AI Engineer", id: "1AzykdIFCR0Q7bjBPy5faDRPwKu4Lre5R" },
  { title: "Machine Learning Ops", id: "1d6zIq2OG0STTaXU05tAmlZPyp0NSQnui" },

  // 🚀 DevOps Engineer
  { title: "DevOps Engineer", id: "1jTdseH7-eQvfckijetkjfmIXhcWPVJdA" },

  // 🔐 Cybersecurity Engineer
  { title: "Cybersecurity Engineer", id: "1Mp7bdNYp6bptp_mkk-ZnMJbzAA87Gcc9" },

  // 📱 Mobile App Development
  { title: "Android Developer", id: "1dIy1D0SH7ZC2bT8kzGiSXgIjJ-IcKwxY" },

  { title: "IOS Developer", id: "1XFwBbrFhxSTpBPP7wji2-VAww3zVbXYm" },

  // 🕹️ Game Development
  { title: "Game Developer", id: "108GrZi0BYXEuD7CfLCn7ACxWiApqla0s" },
  {
    title: "Server Side Game Developer",
    id: "1VMXE72nFPVtVbsqKWu1uMjL3kxkedhnC",
  },
  { title: "UX Design Gaming", id: "1QId-2XNyAoklRHrJ5fDrhj2WsFOIN2py" },

  // 🎨 UI/UX Design
  { title: "UI/UX Designer", id: "1wWngo8v3pUY4jflhwqwDlZGS_PWkYYYR" },

  // 🏗️ Blockchain Developer
  { title: "Blockchain Developer", id: "1-wsujlbyUb1CkUUHzo8xw3lsfpW0zQOQ" },

  // 📊 Data Engineer
  { title: "AI and Data Scientist", id: "1JjsGOzUAEr0SMA-CDs1-oAjNq_F_AwtX" },
  { title: "Data Analyst", id: "1be848TaV9gJn-Mo8_fWENoJm3OgDFPa9" },
];

export default function RoadmapsPage() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#2a3d41] p-4 md:p-6">
      <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-4 relative top-2">
        <Image
          src="/ghost (5) (1).png"
          width={100} // Smaller on small screens
          height={100} // Smaller on small screens
          alt="Ghost Image"
          className="animate-bounce-slow sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
      </div>
      <h2 className="text-white pt-4">Credits: roadmap.sh</h2>
      <h1 className="text-2xl md:text-3xl font-bold pt-8 text-center text-white">
        Roadmaps
      </h1>

      {/* Show Cards if no PDF is selected */}
      {!selectedRoadmap && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mt-8">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-[#1a2629] shadow-md rounded-lg p-5 cursor-pointer hover:scale-105 transition text-center"
              onClick={() => setSelectedRoadmap(roadmap.id)}
            >
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {roadmap.title}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/* Modal Dialog for PDF Viewer */}
      <Dialog
        open={!!selectedRoadmap}
        onClose={() => setSelectedRoadmap(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4">
          <Dialog.Panel className="fixed inset-0 bg-white flex flex-col">
            <button
              onClick={() => setSelectedRoadmap(null)}
              className="absolute top-4 left-4 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
            >
              <p className="font-extrabold p-2 text-2xl sm:text-lg">X</p>
            </button>

            <iframe
              src={`https://drive.google.com/file/d/${selectedRoadmap}/preview`}
              width="100%"
              height="100%"
              className="h-screen w-screen"
              style={{
                border: "none",
              }}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
