import { z } from "zod"
export const registerschema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})