import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
// export default authMiddleware({ publicRoutes: ["/api/uploadthing"] });

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
