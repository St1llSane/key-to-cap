'use client'

import * as z from 'zod'

export const signUpSchema = z.object({
  email: z.string().email({
    message: 'Invalid email'
  }),
  password: z.string().min(8, {
    message: 'Invalid password'
  }),
  confirmPassword: z.string().min(8, {
    message: 'Invalid password'
  })
})
