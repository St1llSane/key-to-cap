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
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useSignUp } from './api/useSignUp'

export interface SignInFormInputs {
  email: string
  password: string
  confirmPassword: string
}

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const { mutateAsync: signUpMutate, isPending } = useSignUp(
    form.getValues()
  )

  const onSubmit = () => {
    signUpMutate()
  }

  return (
    <div className='flex flex-col gap-y-6'>
      <h2 className='text-3xl font-medium'>Sign up</h2>
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

// TODO: need to delete in the future
// 'use client'

// import AuthWithServices from '@/features/forms/auth-with-services'
// import { signUpFormSchema } from '@/features/forms/sign-up-form/sign-up-form-schema'
// import { QueryKey } from '@/shared/types/enums'
// import { Button } from '@/shared/ui/buttons/button'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from '@/shared/ui/forms/form'
// import { Input } from '@/shared/ui/inputs/input'
// import PasswordInput from '@/shared/ui/inputs/password-input'
// import LinkButton from '@/shared/ui/links/link'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import { useTransition } from 'react'
// import { useForm } from 'react-hook-form'
// import * as z from 'zod'

// export interface SignInFormInputs {
//   email: string
//   password: string
//   confirmPassword: string
// }

// const SignUpForm = () => {
//   const [isPending, startTransition] = useTransition()
//   const queryClient = useQueryClient()
//   const router = useRouter()

//   const form = useForm<z.infer<typeof signUpFormSchema>>({
//     resolver: zodResolver(signUpFormSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//       confirmPassword: ''
//     }
//   })

//   const signUp = async () => {
//     startTransition(async () => {
//       try {
//         const { email, password } = form.getValues()

//         const res = await axios.post(`${process.env.HOST}/users/`, {
//           email,
//           password
//         })

//         return res.data
//       } catch (error) {
//         console.log('error', error)
//       }
//     })
//   }

//   const signUpMutation = useMutation({
//     mutationFn: signUp,
//     onSuccess: () => {
//       router.push('/profile')
//       queryClient.invalidateQueries({ queryKey: [QueryKey.users] })
//     },
//     onError: (error) => {
//       console.log('error', error)
//     }
//   })

//   const onSubmit = () => {
//     signUpMutation.mutate()
//   }

//   return (
//     <div className='flex flex-col gap-y-6'>
//       <h2 className='text-3xl font-medium'>Sign up</h2>
//       <Form {...form}>
//         <form
//           className='flex flex-col gap-y-4'
//           onSubmit={form.handleSubmit(onSubmit)}
//         >
//           <FormField
//             control={form.control}
//             name='email'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder='email123@gmail.com' {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name='password'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <PasswordInput {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name='confirmPassword'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Confirm password</FormLabel>
//                 <FormControl>
//                   <PasswordInput {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button
//             className='mt-3 w-full'
//             type='submit'
//             disabled={isPending}
//           >
//             {isPending ? 'Pending...' : 'Submit'}
//           </Button>
//         </form>
//       </Form>
//       <div className='flex flex-col gap-y-6'>
//         <div className='flex items-center justify-between gap-x-2'>
//           <span className='h-[1px] w-full bg-muted' />
//           <span className='whitespace-nowrap text-xs uppercase tracking-wide text-muted-foreground'>
//             OR CONTINUE WITH PROVIDERS BELOW
//           </span>
//           <span className='h-[1px] w-full bg-muted' />
//         </div>
//         <AuthWithServices />
//       </div>
//       <div className='flex items-center justify-between gap-x-2'>
//         <span className='flex gap-x-1.5 align-baseline'>
//           Already have an account?{' '}
//           <LinkButton
//             variant='underline'
//             size='unset'
//             href='/auth/sign-in'
//           >
//             Sign ip
//           </LinkButton>
//         </span>
//       </div>
//     </div>
//   )
// }

// export default SignUpForm
