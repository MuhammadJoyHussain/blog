import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  const decoded = req.cookies.get("token") ? jwt_decode(verify) : [];

  if (url.includes("/myblog")) {
    try {
      if (!verify && !decoded.email) {
        return NextResponse.rewrite(new URL("/login", url));
      } else {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.rewrite(new URL("/login", url));
    }
  }

  return NextResponse.next();
}
