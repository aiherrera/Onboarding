import { z } from 'zod'

const REQUIRED_FIELD = 'This field is required'

export const GlobantProfileSchema = z.object({
  firstName: z.string().min(1, { message: REQUIRED_FIELD }),
  lastName: z.string().min(1, { message: REQUIRED_FIELD }),
  email: z
    .string()
    .min(1, { message: REQUIRED_FIELD })
    .email()
    .regex(/^[^\s@]+@globant\.com$/i, "It doesn't looks like a globant.com email 😕"),
  country: z.string(),
  globantPosition: z.string(),
})
