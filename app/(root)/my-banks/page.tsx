// 'use client'

import AuthForm from '@/components/AuthForm'
import CustomInput from '@/components/CustomInput'
import HeaderBox from '@/components/HeaderBox'
import { Button } from '@/components/ui/button'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser()
  // const router = useRouter()
  // const [isLoading, setIsLoading] = useState(false)
  // const [user, setUser] = useState(null)
  // const formSchema = authFormSchema(type)

  // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // })

  // // 2. Define a submit handler.
  // const onSubmit = async (data: z.infer<typeof formSchema>) => {
  //   setIsLoading(true)

  //   try {
  //     const userData = {
  //       firstName: data.firstName!,
  //       lastName: data.lastName!,
  //       bankName: data.bankName!,
  //       accountNumber: data.accountNumber!,
  //     }

  //     const newUser = userData
  //     setUser(newUser)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome back,'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Kindly add your Bank Details here.'
          />
        </header>
      </div>

      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='flex gap-4'>
            <div>
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
              name='bankName'
              label='Bank Name'
              placeholder='Enter your bank name'
            />
            <CustomInput
              control={form.control}
              name='accountNumber'
              label='Account Number'
              placeholder='Enter your account number'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <Button type='submit' className='form-btn' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={20} className='animate-spin' /> &nbsp;
                  Loading...
                </>
              ) : type === 'account-info' ? (
                'Update'
              ) : (
                'Save'
              )}
            </Button>
          </div>
        </form>
      </Form> */}

      {/* <AuthForm /> */}
    </section>
  )
}

export default MyBanks
