"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Basics Of Coding",
      description:
        "In this, we explain coding with step-by-step examples and code snippets in Python, C++, and Java.",
      link: "/blogs/basics-of-coding",
    },

{
    id: 2,
    title: "Basic Syntax and Data Types",
    description:
      "Understand the basic syntax in programming languages and the different data types such as integers, floats, strings, and booleans.",
    link: "/blogs/basic-syntax-and-data-types",
  },
  {
    id: 3,
    title: "Operators and Expressions",
    description:
      "Learn about arithmetic, comparison, logical, and assignment operators, and how to use them in programming languages.",
    link: "/blogs/operators-and-expressions",
  },
  {
    id: 4,
    title: "Condition Statements",
    description:
      "Explore decision-making statements (if-else) to control the flow of your program.",
    link: "/blogs/condition-statements",
  },
    {
      id: 5,
      title: "For Loop",
      description: 
        "In this, we explain about for loop with step-by-step examples and code snippets in Python, cpp, and Java",
      link: "/blogs/forloop",
    },

  ];

  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-4 relative top-52">
        <Image
          src="/ghost (5) (1).png"
          width={300}
          height={300}
          alt="Ghost Image"
          className="animate-bounce-slow"
        />
        <p className="text-white text-lg max-w-md">
          GhostCoder is your go-to platform for mastering programming concepts
          with ease. Whether you're a beginner stepping into the world of coding
          or a seasoned developer looking to enhance your skills, we’ve got you
          covered.
        </p>
      </div>
    );
  }
  return (
    <div className=" bg-[#2a3d41] text-white min-h-screen">
      <Header />

      {/* Header Section */}
      <section className="bg-[#1a2629] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Welcome, {session.user.name}!</h1>
          <p className="text-lg">
            Explore in-depth articles, tutorials, and insights on DSA, coding,
            and technology.
          </p>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Latest Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#1a2629]  rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {blog.title}
                </h3>
                <p className="text-white mb-6">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-black bg-white hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] font-semibold p-2 rounded-lg"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
