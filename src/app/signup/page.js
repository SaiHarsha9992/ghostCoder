"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Image from "next/image";

export default function SignIn() {
  const [providers, setProviders] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setuserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      delete res.credentials;
      setProviders(res);

      console.log(res);
    };
    fetchProviders();
  }, []);

  const handleSignIn = async (providerId) => {
    const response = await signIn(providerId, {
      callbackUrl: "/blogs", // Redirect to /blogs after successful login
    });

    if (response?.url) {
      router.push(response.url); // Ensure redirection after successful login
    }
  };

  const handleManualSignIn = async (e) => {
  e.preventDefault();
  try {
    const response = await signIn("credentials", {
      email,
      username,
      callbackUrl: "/blogs",
    });
    if (response?.url) {
      router.push(response.url);
    } else {
      throw new Error("Sign-in failed");
    }
  } catch (error) {
    alert("Sign-in failed. Please try again.");
  }
};


  const providerLogos = {
    google: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M22.675 12.005c0-.82-.074-1.605-.213-2.358H12v4.46h5.9a5.075 5.075 0 0 1-2.198 3.334v2.772h3.557c2.08-1.916 3.416-4.737 3.416-8.208z"
          fill="#4285F4"
        />
        <path
          d="M12 23c3.24 0 5.967-1.075 7.957-2.916l-3.557-2.772c-1.01.67-2.304 1.066-4.4 1.066-3.384 0-6.25-2.287-7.276-5.364H1.053v3.364C3.032 20.895 7.212 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M4.724 13.014a7.492 7.492 0 0 1 0-4.03V5.62H1.054a11.004 11.004 0 0 0 0 9.76l3.67-2.366z"
          fill="#FBBC05"
        />
        <path
          d="M12 4.579c1.768 0 3.352.61 4.604 1.807l3.453-3.453C17.958.917 15.231 0 12 0 7.212 0 3.032 2.105 1.053 5.62l3.671 2.365C5.75 4.567 8.616 2.28 12 2.28z"
          fill="#EA4335"
        />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.017c-3.338.726-4.042-1.415-4.042-1.415-.545-1.384-1.33-1.753-1.33-1.753-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.109-.774.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.182 0 0 1.007-.322 3.3 1.23a11.518 11.518 0 0 1 3.004-.404c1.02.004 2.048.138 3.004.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.655.242 2.878.118 3.182.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.477 5.92.431.371.815 1.102.815 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-[#1a2629] text-white min-h-screen flex flex-col items-center justify-center">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-5xl mx-auto p-4">
        {/* Left: Sign-In Form */}
        <div className="flex flex-col lg:items-end justify-center w-full max-w-md">
          <div className="flex flex-col items-center justify-center p-6 px-20 bg-[#2a3d41] rounded-lg shadow-lg">
            <div className="text-center px-8">
              <img
                alt="Your Company"
                src="/Navbar Logo Sil.png"
                className="h-16 w-auto mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2 text-white">
                Sign Up to your account
              </h2>
            </div>

            {/* Google and GitHub sign-in buttons */}
            <div className="flex flex-col space-y-4 w-full">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)}
                    className="flex items-center justify-center w-full py-2 bg-gray-800 text-white rounded-md"
                  >
                    <span className="mr-2">Continue with {provider.name}</span>
                    {providerLogos[provider.id.toLowerCase()]}{" "}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-4">
          <Image
            src="/ghost (5) (1).png"
            width={300}
            height={300}
            alt="Ghost Image"
            className="animate-bounce-slow"
          />
          <p className="text-white text-lg max-w-md">
            GhostCoder is your go-to platform for mastering programming concepts
            with ease. Whether you're a beginner stepping into the world of
            coding or a seasoned developer looking to enhance your skills, we’ve
            got you covered.
          </p>
        </div>
      </main>
    </div>
  );
}
