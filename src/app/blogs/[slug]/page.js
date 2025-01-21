"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const blogs = {
  "recursion-dsa": {
    title: "Understanding Recursion in DSA",
    description:
      "Learn the fundamentals of recursion, its applications in DSA, and its implementation in various programming languages.",
    useCase:
      "Recursion is widely used in problems like traversing trees, solving mathematical problems (e.g., factorial, Fibonacci), and implementing algorithms like divide-and-conquer.",
    exampleProblem:
      "Write a recursive function to calculate the factorial of a given number.",
    codeExample: `
function factorial(n) {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}`,
    explanation: `
      <p>The <strong>factorial</strong> function uses recursion to multiply the current number <code>n</code> by the result of calling itself with <code>n - 1</code>. This continues until the base case of <code>n === 0</code> is reached, returning <code>1</code>.</p>
    `,
  },
  "binary-search": {
    title: "Binary Search: The Divide and Conquer Approach",
    description:
      "A deep dive into binary search and its efficient implementation for finding elements in sorted arrays.",
    useCase:
      "Binary search is used in searching algorithms, database indexing, and solving problems like finding square roots or peaks in arrays.",
    exampleProblem:
      "Implement binary search to find the index of a target element in a sorted array.",
    codeExample: `
function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid; // Target found
    if (arr[mid] < target) start = mid + 1; // Search in the right half
    else end = mid - 1; // Search in the left half
  }
  return -1; // Target not found
}`,
    explanation: `
      <p>Binary search works by dividing the sorted array into halves and checking the middle element. Depending on whether the target is less than or greater than the middle, the search continues in the left or right half until the target is found or all elements are checked.</p>
    `,
  },
};

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extract slug from the path
  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="bg-[#1a2629] min-h-screen flex items-center justify-center text-[#ffffff]">
        <h1 className="text-2xl font-bold">404: Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1a2629] text-[#e5e5e5] min-h-screen">
      <Header />
      <div className="container mx-auto py-16 px-8">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-4 text-[#e5e5e5]">{blog.title}</h1>
        <p className="text-lg text-[#cfd8dc] mb-8">{blog.description}</p>

        {/* Blog Use Case */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#b0bec5]">
            Use Case
          </h2>
          <p className="text-[#cfd8dc]">{blog.useCase}</p>
        </div>

        {/* Example Problem */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#b0bec5]">
            Example Problem
          </h2>
          <p className="text-[#cfd8dc]">{blog.exampleProblem}</p>
        </div>

        {/* Code Section */}
        <div className="mb-6 bg-[#2a3d41] p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-[#80deea]">
            Code Example
          </h2>
          <pre className="bg-[#1a2629] text-sm p-4 rounded-md overflow-auto text-[#e5e5e5]">
            <code>{blog.codeExample}</code>
          </pre>
        </div>

        {/* Explanation Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#b0bec5]">
            Explanation
          </h2>
          <div
            className="text-[#cfd8dc]"
            dangerouslySetInnerHTML={{ __html: blog.explanation }}
          ></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
