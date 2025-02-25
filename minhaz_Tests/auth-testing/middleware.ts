import authConfig from "./auth.config";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";

const {auth}= NextAuth(authConfig);

import {DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    publicRoutes,
    authRoutes,
} from "@/routes"
export default auth(async (req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
  
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    console.log(isLoggedIn,isPublicRoute)
  
    if (isApiAuthRoute) {
      return null;
    }
  
    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL("/settings", req.nextUrl.origin));
      }
      return null;
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
      }
  
    return null;
  });
  
//optional
export const config = {
    matcher: [
      '/((?!_next|api/auth|[^?]*\\.(?:js|css|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf|otf)).*)',
    ],
  };
  