import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="bg-[#f0f4f8] text-[#333] min-h-screen">
      <Header />

      {/* Header Section */}
      <section className="bg-[#1a2629] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            Explore the wide range of services offered by GhostCoder to enhance
            your learning and career growth.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 px-8 bg-[#2a3d41] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                DSA & Coding Tutorials
              </h3>
              <p>
                Get started with detailed explanations and tutorials on Data
                Structures and Algorithms. We offer beginner-friendly and
                advanced content in Python, C++, and Java.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Code Implementation
              </h3>
              <p>
                Learn to write clean and efficient code. We provide step-by-step
                implementation guides for various algorithms and data
                structures.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Problem-Solving Insights
              </h3>
              <p>
                Master problem-solving with in-depth explanations, covering time
                complexity, logic, and real-world applications.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Placement Preparation
              </h3>
              <p>
                Crack your dream job with our placement training that includes
                mock interviews, resume building, and coding challenges.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Technology Training
              </h3>
              <p>
                Stay ahead with training on the latest technologies like cloud
                computing, AI, and modern web frameworks.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-[#1a2629] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Career Development</h3>
              <p>
                Develop soft skills and technical expertise for a successful
                career in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-8 bg-[#1a2629] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Take your coding journey to the next level with GhostCoder. Sign up
            today and access free tutorials, training, and career development
            resources.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 bg-white text-black font-semibold text-lg rounded-lg hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
