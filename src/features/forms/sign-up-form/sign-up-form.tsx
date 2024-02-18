'use client'

import AuthWithServices from '@/features/forms/auth-with-services'
import { signUpFormSchema } from '@/features/forms/sign-up-form/sign-up-form.schema'
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
import { BaseSyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useSignUp } from './api/useSignUp'

export interface SignInFormInputs {
  email: string
  password: string
  confirmPassword: string
}

export type fields = z.infer<typeof signUpFormSchema>

const SignUpForm = () => {
  const form = useForm<fields>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const { mutateAsync: signUpMutate, isPending } = useSignUp(
    form.getValues(),
    form.reset
  )

  const onSubmit = () => {
    if (isPending) return

    signUpMutate()
  }

  return (
    <div className='flex flex-col gap-y-6'>
      <h2 className='text-3xl font-medium'>Sign up</h2>
      <Form {...form}>
        <form
          className='flex flex-col gap-y-4'
          onSubmit={(e: BaseSyntheticEvent, ...args) => {
            e.preventDefault()
            form.handleSubmit(onSubmit)(...args)
          }}
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
                  <PasswordInput isShowEye {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
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
          Already have an account?{' '}
          <LinkButton
            variant='underline'
            size='unset'
            href='/auth/sign-in'
          >
            Sign ip
          </LinkButton>
        </span>
      </div>
    </div>
  )
}

export default SignUpForm
