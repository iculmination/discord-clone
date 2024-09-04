import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
  const userId = auth();
  if (!userId) throw new Error("Unauthorized");
  return {userId: userId}
};

export const ourFileRouter = {
 
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;


// imageUploader: f({ image: { maxFileSize: "4MB" } })
// .middleware(async ({ req }) => {
//   const user = await auth(req);

//   if (!user) throw new UploadThingError("Unauthorized");

//   return { userId: user.id };
// })
// .onUploadComplete(async ({ metadata, file }) => {
//   console.log("Upload complete for userId:", metadata.userId);

//   console.log("file url", file.url);

//   return { uploadedBy: metadata.userId };
// }),