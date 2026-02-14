"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function RoadmapsPage() {
 
  return (
    <>
      <Header className="w-full top-0" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-16 text-white border border-white m-8 bg-[#2a3d41]">
        <h1 className="text-3xl font-bold mb-2">DSA Master - ghostCoder</h1>
        <p className="text-sm text-gray-400">By Harsha</p>

        <section className="mt-6 space-y-4">
          <p>Welcome, ghostCoder</p>
          <p>
            Today we have curated a list of the <strong>Top Data Structures and Algorithms</strong> to study for interviews.
            These concepts will teach you the core techniques you need to know to crush any technical interview.
          </p>
          <p>Algorithms are divided into 2 broad categories:</p>
          <ul className="list-disc pl-5">
            <li>Data Structure specific algorithms</li>
            <li>General algorithms/techniques</li>
          </ul>
          <p>
            Implement all the algorithms unless otherwise specified. We will be using some of these algorithms in the next editions of Interview Master (if not already covered in the previous editions).
          </p>

          <h2 className="text-xl font-semibold mt-8">THE ULTIMATE DSA GUIDE</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mt-4">Data Structure specific algorithms</h3>

            <ul className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Arrays</strong>
                <ul className="list-disc pl-6">
                  <li>QuickSort, MergeSort</li>
                  <li>Binary Search</li>
                  <li>Two Pointers</li>
                  <li>Sliding Window</li>
                </ul>
              </li>

              <li>
                <strong>Linked Lists</strong>
                <ul className="list-disc pl-6">
                  <li>Traversal, Insertion/Deletion, Reversal</li>
                  <li>Cycle Detection - Floyd's Algorithm</li>
                </ul>
              </li>

              <li>
                <strong>Hash Tables</strong> - Just understand insertion, deletion, collision handling
              </li>

              <li>
                <strong>Trees</strong>
                <ul className="list-disc pl-6">
                  <li>Inorder, Preorder, Postorder</li>
                  <li>Searching in BST</li>
                </ul>
              </li>

              <li><strong>Stacks</strong> - Push/Pop/Peek</li>
              <li><strong>Queues</strong> - Enqueue/Dequeue</li>
              <li>
                <strong>Heaps</strong>
                <ul className="list-disc pl-6">
                  <li>Insertion, Deletion</li>
                  <li>Top K Elements</li>
                </ul>
              </li>

              <li>
                <strong>Graphs</strong>
                <ul className="list-disc pl-6">
                  <li>BFS, DFS</li>
                  <li>Dijkstra, Cycle Detection</li>
                </ul>
              </li>

              <li>
                <strong>Tries</strong> - Implement from scratch for prefix search
              </li>

              <li>
                <strong>Union-Find</strong> - Implement from scratch with union and find operations
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6">General Algorithms / Techniques</h3>

            <ul className="list-decimal pl-6 space-y-2">
              <li><strong>Recursion:</strong> Factorial, Tree Traversal</li>
              <li><strong>Dynamic Programming:</strong> Knapsack, LCS</li>
              <li><strong>Greedy:</strong> Kruskal’s MST</li>
              <li><strong>Backtracking:</strong> Sudoku, N-Queens, Permutations</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded mt-8 shadow-md">
            <h3 className="text-lg font-semibold mb-2">WHAT'S NEXT?</h3>
            <p>
              Once you’ve implemented the above algorithms, solve Interview Master 100 — a curated list of 100 top problems that build upon each other to enhance your mastery.
            </p>
          </div>

         

          <div className="border-t mt-8 pt-4 text-sm text-gray-400">
            <p>Cheers,</p>
            <p><strong>Harsha + Shanmukh + Siva</strong></p>
            <p className="mt-4">Our platform is constantly evolving to ensure that learners have access to the latest technologies, coding languages, and career skills. We aim to help you succeed in both your learning journey and your future career.</p>
            
            <p className="mt-2">Credits: InstaByte.</p>
          </div>
        </section>
      </main>

      <Footer className="w-full bottom-0" />
    </>
  );
}
