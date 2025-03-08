"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateCommunity, setAnimateCommunity] = useState(false);
  const [animateContact, setAnimateContact] = useState(false);
  const aboutSectionRef = useRef(null);
  const communityRef = useRef(null);
  const contactRef = useRef(null);

  const [state, handleSubmit] = useForm("mkggddaz");

  useEffect(() => {
    // Timer for logo appearance
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutSectionRef.current) {
              setAnimateAbout(true);
            } else if (entry.target === communityRef.current) {
              setAnimateCommunity(true);
            } else if (entry.target === contactRef.current) {
              setAnimateContact(true);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (communityRef.current) {
      observer.observe(communityRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (communityRef.current) {
        observer.unobserve(communityRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[#1a2629] text-white min-h-screen flex justify-center items-center relative p-4">
        <div>
          <video
            src="/Untitled video - Made with Clipchamp (71).mp4"
            className="absolute inset-0 w-full h-full object-cover pt-5"
            autoPlay
            muted
            playsInline
          />

          {showImage && (
            <div className="absolute inset-0 flex justify-center items-center mt-16">
              <Image
                src="/ghost (5) (1).png"
                width={900}
                height={900}
                alt="Ghost Coder Logo"
                className="animate-rise"
              />
            </div>
          )}
        </div>
        {showImage && (
          <button className="mt-auto mb-8 px-6 py-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-200 transition duration-1300 z-10 animate-rise shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]">
            <a href="/blogs">Explore GhostCoder</a>
          </button>
        )}
      </div>

      <div className="mt-12 bg-[#1a2629] w-full min-h-screen lg:min-h-[400vh]">
        <Header />

        <div
          ref={aboutSectionRef}
          className={`mt-64 px-8 py-12 w-full bg-[#1a2629] text-center ${
            animateAbout ? "animate-rise" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-12">
            Welcome to GhostCoder
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            GhostCoder is your go-to platform for mastering programming concepts
            with ease. Whether you're a beginner stepping into the world of
            coding or a seasoned developer looking to enhance your skills, we’ve
            got you covered.
          </p>

          <h3 className="text-3xl font-semibold text-white mb-8">
            What We Offer
          </h3>
          <ul className="text-lg text-gray-300 space-y-5">
            <li>
              <strong className="text-white">💡 Comprehensive Learning:</strong>{" "}
              Dive into in-depth tutorials, detailed explanations, and
              real-world examples for coding and algorithms.
            </li>
            <li>
              <strong className="text-white">🔍 Multi-Language Support:</strong>{" "}
              Learn with code implementations in Python, C++, Java, and more.
            </li>
            <li>
              <strong className="text-white">📚 Practical Resources:</strong>{" "}
              Solve example programs with step-by-step explanations and clear
              solution breakdowns.
            </li>
            <li>
              <strong className="text-white">🤝 Community Support:</strong>{" "}
              Collaborate and grow with a thriving network of developers.
            </li>
            <li>
              <strong className="text-white">🚀 Regular Updates:</strong> Stay
              ahead with the latest tools, techniques, and trends in the tech
              world.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mt-12 mb-8">
            What’s Next for GhostCoder?
          </h3>
          <p className="text-lg text-gray-300">
            We're just getting started! Shortly, GhostCoder will
            Expand into:
          </p>
          <ul className="text-lg text-gray-300 space-y-5 mt-6">
            <li>✅ Placement training and interview preparation resources</li>
            <li>✅ Advanced technology courses for industry-leading skills</li>
            <li>✅ Exclusive tools to supercharge your development workflow</li>
          </ul>

          <p className="text-lg text-gray-300 mt-8">
            Together, let’s simplify coding and make technology accessible to
            everyone. Join GhostCoder and start coding your way to success!
          </p>
        </div>

        <div
          ref={communityRef}
          className="mt-24 px-8 py-12 w-full bg-[#1a2629] text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">
            Community Highlights
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            At GhostCoder, we believe in the power of community. Whether you're
            sharing knowledge, collaborating on projects, or seeking guidance,
            our community is here to help you grow. Here are some of the
            highlights of being a part of GhostCoder's vibrant community:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                🌱 Learning Together
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Join interactive study groups and coding challenges. Share your
                learning journey and help others succeed as you go.
              </p>
            </div>
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                💬 Peer Support
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Whether you're stuck on a problem or need advice, our community
                forums and chat channels are full of fellow coders ready to
                help!
              </p>
            </div>
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                🤝 Collaboration Opportunities
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Team up with other developers to build projects, share
                knowledge, and explore innovative ideas together.
              </p>
            </div>
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                🎓 Mentorship
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Get guidance from experienced developers and industry
                professionals who are eager to help you grow and succeed.
              </p>
            </div>
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                📢 Knowledge Sharing
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Share your expertise through blog posts, tutorials, and videos,
                and build your presence in the coding community.
              </p>
            </div>
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                🌍 Global Network
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Connect with like-minded coders from around the world, exchange
                ideas, and gain a global perspective on coding practices.
              </p>
            </div>
            {/* New WhatsApp Card */}
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 col-span-1 sm:col-span-2 lg:col-span-1 lg:col-start-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                📲 Join Our WhatsApp Group
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                Stay connected with fellow coders and community members. Join
                our WhatsApp group for instant updates, discussions, and
                support!
              </p>
              <a
                href="https://chat.whatsapp.com/CsJaeOesHUJ889XoBMqL4C"
                className="inline-block mt-4 text-xl font-semibold text-green-500 hover:text-green-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-8">
            At GhostCoder, we’re not just about coding; we’re about building a
            community that fosters collaboration, mentorship, and personal
            growth. Join us and become a part of the movement!
          </p>
        </div>

        <div
          ref={contactRef}
          className="mt-24 px-8 py-12 w-full bg-[#1a2629] text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12 ">Support</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have a question or need assistance? Our support team is here to
            help. Please fill out the form below, and we’ll get back to you as
            soon as possible.
          </p>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-4 py-2 rounded-lg bg-[#2a3d41] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-2 rounded-lg bg-[#2a3d41] text-white border border-gray-600 focus:outline-none focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                  placeholder="Enter your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="px-4 py-2 rounded-lg bg-[#2a3d41] text-white border border-gray-600 focus:outline-none focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                  placeholder="Write your message here"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-6 py-3 bg-[#fff] text-black font-semibold text-lg rounded-lg hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
            {state.succeeded && (
              <p className="text-lg text-green-500 mt-4">
                Thanks for your message!
              </p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
