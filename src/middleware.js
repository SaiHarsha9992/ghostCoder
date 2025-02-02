import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Using NextAuth's JWT helper

export async function middleware(req) {
  // Get the session or token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/blogs") ||
      req.nextUrl.pathname.startsWith("/assistant"))
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blogs/:path*", "/assistant/:path*"],
};
