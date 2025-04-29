import { z } from "zod";

const formSchema = z.object({
    title: z.string(),
});
