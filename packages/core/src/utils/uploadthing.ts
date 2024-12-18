import { generateUploadButton, generateUploadDropzone, generateUploader } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { OurFileRouter } from "../uploadthing/core";

export const Uploader = generateUploader<OurFileRouter>();
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
