'use client'

import * as z from 'zod'

export const signInSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string().min(8, {
    message: 'Invalid password'
  })
})
