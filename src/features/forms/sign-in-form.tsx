'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signInSchema } from 'shared/schemas/sign-in-schema'
import { Button } from 'shared/ui/buttons/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'shared/ui/forms/form'
import { Input } from 'shared/ui/inputs/input'
import PasswordInput from 'shared/ui/inputs/password-input'
import * as z from 'zod'
import SignInWithProviders from './sign-in-with-providers'

export interface SignInFormInputs {
  email: string
  password: string
}

const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
  }

  return (
    <div className='flex flex-col gap-y-6'>
      <h2 className='text-3xl font-medium'>Sign n</h2>
      <Form {...form}>
        <form
          className='flex flex-col gap-y-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='email123@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='mt-3 w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center justify-between gap-x-2'>
          <span className='h-[1px] w-full bg-muted' />
          <span className='whitespace-nowrap text-xs uppercase tracking-wide text-muted-foreground'>
            OR CONTINUE WITH PROVIDERS BELOW
          </span>
          <span className='h-[1px] w-full bg-muted' />
        </div>
        <SignInWithProviders />
      </div>
      <div className='mt-2 flex items-center justify-between gap-x-2'>
        <span>
          Don&apos;t have an account?{' '}
          <Link
            className='underline-offset-[5px] hover:underline'
            href='/sign-up'
          >
            Sign up
          </Link>
        </span>
        <span>Reset password</span>
      </div>
    </div>
  )
}

export default SignInForm
