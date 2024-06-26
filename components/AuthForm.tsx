'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
// import CustomSelect from './CustomSelect'
import { authFormSchema } from '@/lib/utils'
import { Loader2, Router } from 'lucide-react'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import { useToast } from '@/components/ui/use-toast'

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [error, setError] = useState(false)
  const { toast } = useToast()

  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    try {
      // Sign up with Appwrite

      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          username: data.username!,
          email: data.email,
          password: data.password,
          bankName: data.bankName!,
          accountNumber: data.accountNumber!,
          invAmount: data.invAmount!,
        }

        const newUser = await signUp(userData)
        setUser(newUser)
        toast({
          title: 'Creating Account ',
          description: 'Your account is being created...please hold',
        })

        setTimeout(() => {
          setShowConfetti(true)
        }, 500)
      }

      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if (response) router.push('/')
      }
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='auth-form'>
      {showConfetti && <Confetti />}
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
          <Image src='/icons/logo.svg' width={34} height={34} alt='logo' />
          <h1 className='text-22 font-ibm-plex-serif font-bold text-black-1'>
            Helping Hands Investment
          </h1>
        </Link>

        <div>
          {user && (
            // <div className='sm:flex flex-1 flex-col text-center sm:text-left absolute top-20 pl-10 z-10'>
            <div className='mb-4'>
              <h1 className='font-bold tracking-tight text-3xl md:text-4xl md:max-w-[50vw] text-amber-500'>
                Your best market to invest and make{' '}
                <span className='text-blue-600'>MONEY</span> while asleep.
              </h1>
              <p className='mt-6 text-base text-muted-foreground md:max-w-[45vw]'>
                Welcome to Helping-Hands Investment. Where every member is
                verified and ready to help each other by combining our resources
                to create a larger capital for investment and a larger interest
                for.
              </p>
            </div>
          )}

          <h1 className='text-24 font-semibold text-blue-700'>
            {user
              ? 'Account created successfully!'
              : type === 'sign-in'
              ? 'Sign In'
              : 'Sign Up'}
            <p className='text-16 font-normal text-gray-600 my-8'>
              {user ? (
                <Link href='/sign-in' className=' flex gap-4 mt-auto'>
                  <Button className='form-btn'>Click here to Sign in.</Button>
                </Link>
              ) : (
                'Please enter your details'
              )}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-4'>{/* Plaid Link */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              {type === 'sign-up' && (
                <>
                  <div className='flex gap-4'>
                    <CustomInput
                      control={form.control}
                      name='firstName'
                      label='First Name'
                      placeholder='Enter your first name'
                    />
                    <CustomInput
                      control={form.control}
                      name='lastName'
                      label='Last Name'
                      placeholder='Enter your last name'
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name='username'
                    label='Username'
                    placeholder='Enter your username'
                  />
                  <CustomInput
                    control={form.control}
                    name='bankName'
                    label='Bank Name'
                    placeholder='Enter bank name'
                  />
                  <CustomInput
                    control={form.control}
                    name='accountNumber'
                    label='Account Number'
                    placeholder='Enter account number'
                  />

                  <CustomSelect
                    control={form.control}
                    name='invAmount'
                    label='Investment Amount'
                    placeholder='Choose Investment Amount'
                  />
                </>
              )}

              <CustomInput
                control={form.control}
                name='email'
                label='Email'
                placeholder='Enter your email'
              />

              <CustomInput
                control={form.control}
                name='password'
                label='Password'
                placeholder='Enter your password'
              />

              <div className='flex flex-col gap-4'>
                <Button type='submit' className='form-btn' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' ? (
                    'Sign In'
                  ) : type === 'sign-up' ? (
                    'Sign Up'
                  ) : (
                    'Save'
                  )}
                </Button>
                {error && (
                  <p>Please, kindly confirm your email if it is correct.</p>
                )}
              </div>
            </form>
          </Form>

          <footer className='flex justify-center gap-1'>
            {/* {error && (
              <p>Please, kindly confirm your email if it is correct.</p>
            )} */}
            <p className='text-14 font-normal text-gray-600'>
              {type === 'sign-in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
            <Link
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
              className='form-link'
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm
