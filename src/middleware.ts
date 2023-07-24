// import { authMiddleware } from "@clerk/nextjs";
//
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
// export default authMiddleware({});
//
// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import {withClerkMiddleware} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
    console.log("Middleware running");
    return NextResponse.next();
});

export const config = {
    matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
