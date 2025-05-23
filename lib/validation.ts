import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Must be 3 character long" })
    .max(100, { message: "Must be less than 100 characters long" }),
  description: z
    .string()
    .min(20, { message: "Must be 20 character long" })
    .max(500, { message: "Must be less than 500 characters long" }),
  category: z
    .string()
    .min(3, { message: "Must be 3 character long" })
    .max(100, { message: "Must be less than 20 characters long" }),
  link: z
    .string()
    .url({ message: "Invalid URL" })
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          return contentType?.startsWith("image/");
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      {
        message: "Please Enter a Valid Image URL",
        // path:[""],
      }
    ),

  pitch: z
    .string()
    .min(100, { message: "Enter a pitch with atleast 100 characters" }),
});
