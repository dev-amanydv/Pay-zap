import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname.startsWith("/auth");
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Allow access to the landing page
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Check for session cookie
  const sessionCookie =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  // If accessing dashboard and neither token nor cookie present, redirect to login
  if (isDashboardRoute && !token && !sessionCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If authenticated and trying to access auth routes, redirect to dashboard
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};