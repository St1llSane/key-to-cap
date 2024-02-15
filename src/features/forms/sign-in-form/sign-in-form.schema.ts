'use client'

import * as z from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string().min(8, {
    message: 'Invalid password'
  })
})
