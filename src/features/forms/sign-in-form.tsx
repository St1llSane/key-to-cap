'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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
import LinkButton from 'shared/ui/links/link'
import * as z from 'zod'
import AuthWithProviders from './auth-with-providers'

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
      <h2 className='text-3xl font-medium'>Sign in</h2>
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
        <AuthWithProviders />
      </div>
      <div className='flex items-center justify-between gap-x-2'>
        <span className='flex gap-x-1.5 align-baseline'>
          Don&apos;t have an account?{' '}
          <LinkButton variant='underlined' size='unset' href='/sign-up'>
            Sign up
          </LinkButton>
        </span>
        <LinkButton
          variant='underlined'
          size='unset'
          href='/sign-in/reset-password'
        >
          Reset password
        </LinkButton>
      </div>
    </div>
  )
}

export default SignInForm
