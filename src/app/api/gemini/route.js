import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const API_KEY = process.env.GEMINI_API;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          { parts: [{ text: messages[messages.length - 1].content }] },
        ],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(response.data); // Log full response for debugging

    return NextResponse.json({
      content: response.data.candidates[0]?.content.parts[0]?.text,
    });
  } catch (error) {
    // Enhanced error logging
    console.error("Error fetching Gemini response:", error.response?.data || error.message);

    return NextResponse.json(
      { error: "Failed to fetch response", details: error.message },
      { status: 500 }
    );
  }
}
