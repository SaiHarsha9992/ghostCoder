import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#f0f4f8] text-[#333] min-h-screen">
      <Header />

      {/* Mission Section */}
      {/* Header Section */}
      <section className="bg-[#1a2629] text-white  py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About GhostCoder</h1>
          <p className="text-lg">
            Your go-to platform for learning DSA, coding, and technology—free of
            cost!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-[#2a3d41] text-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold  text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-white mb-6">
            At GhostCoder, our mission is simple: to provide free, high-quality
            coding tutorials and problem-solving explanations for everyone. We
            focus on making complex coding concepts like Data Structures and
            Algorithms (DSA) easy to understand through detailed explanations,
            code examples, and real-world problem-solving cases.
          </p>
          <p className="text-lg text-white mb-6">
            Our platform is constantly evolving to ensure that learners have
            access to the latest technologies, coding languages, and career
            skills. We aim to help you succeed in both your learning journey and
            your future career.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#1a2629] text-white  py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">
                DSA & Coding Tutorials
              </h3>
              <p className="text-white">
                Dive into comprehensive tutorials on Data Structures and
                Algorithms. We cover everything from basic to advanced concepts
                with detailed explanations, example programs, and solutions in
                Python, C++, and Java.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">
                Code Implementation
              </h3>
              <p className="text-white">
                Learn how to implement algorithms and data structures with
                hands-on code examples. Our platform provides clear,
                step-by-step guides on coding in various languages such as
                Python, C++, and Java.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#2a3d41] p-6 rounded-lg shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-4">
                Solution Explanation
              </h3>
              <p className="text-white">
                Get deep insights into the problem-solving process. We break
                down code solutions to help you understand the logic, time
                complexity, and optimizations involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 px-8 bg-[#2a3d41]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold  text-white  mb-6">
            What’s Next for GhostCoder
          </h2>
          <p className="text-lg  text-white  mb-6">
            We're not stopping here! In the future, we’ll be adding:
          </p>
          <ul className="list-disc text-lg  text-white  mx-auto max-w-4xl mb-8">
            <li className="mb-2">
              Placement Training: A complete guide for cracking interviews, with
              mock interviews, coding challenges, and resume-building tips.
            </li>
            <li className="mb-2">
              Technology Training: Learn the latest tech stacks, frameworks, and
              tools for web and mobile development, cloud computing, AI, and
              more.
            </li>
            <li className="mb-2">
              Career Development: Building your skills for professional growth,
              from technical skills to soft skills.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-[#1a2629]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold  text-white  mb-6">
            Get in Touch
          </h2>
          <p className="text-lg  text-white  mb-8">
            If you have any questions, feedback, or would like to join our
            growing community, feel free to contact us. We’re here to help you!
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#fff] text-black font-semibold text-lg rounded-lg hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
