'use client'

import AuthWithServices from '@/features/forms/auth-with-services'
import { signInFormSchema } from '@/features/forms/sign-in-form/sign-in-form.schema'
import { Button } from '@/shared/ui/buttons/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/ui/forms/form'
import { Input } from '@/shared/ui/inputs/input'
import PasswordInput from '@/shared/ui/inputs/password-input'
import LinkButton from '@/shared/ui/links/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export interface SignInFormInputs {
  email: string
  password: string
}

const SignInForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const signIn = async () => {
    startTransition(async () => {
      try {
        const { email, password } = form.getValues()

        const res = await axios.get(
          `${process.env.HOST}/users/${email}/${password}`
        )

        return res.data
      } catch (error) {
        console.log('error', error)
      }
    })
  }

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      router.push('/profile')
    },
    onError: (error) => {
      console.log('error', error)
    }
  })

  const onSubmit = () => {
    signInMutation.mutate()
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
          <Button
            className='mt-3 w-full'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'Pending...' : 'Submit'}
          </Button>
        </form>
      </Form>
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center justify-between gap-x-2'>
          <span className='h-[1px] w-full bg-muted' />
          <span className='whitespace-nowrap text-xs uppercase tracking-wide text-foreground'>
            OR CONTINUE WITH SERVICES BELOW
          </span>
          <span className='h-[1px] w-full bg-muted' />
        </div>
        <AuthWithServices />
      </div>
      <div className='flex items-center justify-between gap-x-2'>
        <span className='flex gap-x-1.5 align-baseline'>
          Don&apos;t have an account?{' '}
          <LinkButton
            variant='underline'
            size='unset'
            href='/auth/sign-up'
          >
            Sign up
          </LinkButton>
        </span>
        <LinkButton
          variant='underline'
          size='unset'
          href='auth/reset-password'
        >
          Reset password
        </LinkButton>
      </div>
    </div>
  )
}

export default SignInForm
