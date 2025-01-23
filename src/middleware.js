import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Using NextAuth's JWT helper

export async function middleware(req) {
  // Get the session or token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token or session exists, redirect to signin
  if (!token && req.nextUrl.pathname.startsWith("/blogs")) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blogs/:path*"], // Protect '/blogs' and any sub-routes
};
