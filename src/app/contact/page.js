"use client";
import React from "react";
import Header from "../components/Header";
import { useForm, ValidationError } from "@formspree/react";
import Footer from "../components/Footer";
const Contact = () => {
  const [state, handleSubmit] = useForm("mkggddaz");
  return (
    <div className="bg-[#2a3d41] text-[#333] min-h-screen">
      <Header />

      {/* Header Section */}
      <section className="bg-[#1a2629] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We’re here to help! Reach out to us with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto p-8 bg-[#2a3d41]">
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
              className="px-4 py-2 rounded-lg bg-[#1a2629] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
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
              className="px-4 py-2 rounded-lg bg-[#1a2629] text-white border border-gray-600 focus:outline-none focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
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
              className="px-4 py-2 rounded-lg bg-[#1a2629] text-white border border-gray-600 focus:outline-none focus:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
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

      <Footer />
    </div>
  );
};

export default Contact;
