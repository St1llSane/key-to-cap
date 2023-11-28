'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from 'shared/resolvers/sign-in-schema'
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
    <div className='space-y-6'>
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
          <Button className='mt-2 w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm
