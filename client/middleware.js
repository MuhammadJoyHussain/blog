import { NextResponse } from "next/server";

export default function middleware(req) {
  const verify = req.cookies.get("token");
  const url = req.url;

  if (url.includes("/myblog")) {
    try {
      if (!verify) {
        return NextResponse.rewrite(new URL("/login", url));
      } else {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.rewrite(new URL("/login", url));
    }
  }

  if (url.includes("/addblog")) {
    try {
      if (!verify) {
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
