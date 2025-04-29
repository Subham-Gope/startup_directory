import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3).max(100),
});
