'use client'

import * as z from 'zod'

export const signUpFormSchema = z
  .object({
    email: z.string().email({
      message: 'Invalid email'
    }),
    password: z.string().min(8, {
      message: 'Invalid password'
    }),
    confirmPassword: z.string().min(8, {
      message: `Passwords don't match`
    })
  })
  .refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    {
      message: `Passwords don't match`,
      path: ['confirmPassword']
    }
  )
