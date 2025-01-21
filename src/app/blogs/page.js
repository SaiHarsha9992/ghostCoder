import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Recursion in DSA",
      description:
        "Dive deep into the concept of recursion with step-by-step examples and code snippets in Python, C++, and Java.",
      link: "/blogs/recursion-dsa",
    },
    {
      id: 2,
      title: "Binary Search",
      description: "Learn how binary search works.",
      link: "/blogs/binary-search",
    },
  ];

  return (
    <div className=" bg-[#2a3d41] text-white min-h-screen">
      <Header />

      {/* Header Section */}
      <section className="bg-[#1a2629] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
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
            Latest Articles
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
                  className="text-white font-semibold hover:underline"
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
