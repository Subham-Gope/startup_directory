import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3).max(100),
  descripton: z.string().min(20).max(500),
});
