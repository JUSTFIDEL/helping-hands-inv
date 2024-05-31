import HeaderBox from '@/components/HeaderBox'
import { Button } from '@/components/ui/button'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome back,'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Kindly Add Your Bank Details Here.'
          />
        </header>

        {/* <div className='flex flex-col justify-between mt-0 pt-0'>
          <div className='md:flex flex-wrap gap-6 p-2'>
            <div className='mx-4 border border-slate-200 drop-shadow-md bg-gray-100 p-4 rounded-md my-4'>
              <h2>
                <span className='font-bold'>Bank Name:</span> First Bank
              </h2>
              <p>
                <span className='font-bold'>Account Number:</span> 3178554562
              </p>
              <p>
                <span className='font-bold'>Account Name:</span> Qwertyuiop
              </p>
            </div>

            <div className='mx-4 border border-zinc-700 drop-shadow-md bg-gray-50 p-4 rounded-md my-4'>
              <h2>
                <span className='font-bold'>Bank Name:</span> GT Bank
              </h2>
              <p>
                <span className='font-bold'>Account Number:</span> 0108554562
              </p>
              <p>
                <span className='font-bold'>Account Name:</span> Qwertyuiop
              </p>
            </div>

            <div className='mx-4 border border-slate-200 drop-shadow-md bg-gray-100 p-4 rounded-md my-4'>
              <h2>
                <span className='font-bold'>Bank Name:</span> Access Bank
              </h2>
              <p>
                <span className='font-bold'>Account Number:</span> 0078554562
              </p>
              <p>
                <span className='font-bold'>Account Name:</span> Qwertyuiop
              </p>
            </div>

            <div className='mx-4 border border-zinc-700 drop-shadow-md bg-gray-50 p-4 rounded-md my-4'>
              <h2>
                <span className='font-bold'>Bank Name:</span> Opay
              </h2>
              <p>
                <span className='font-bold'>Account Number:</span> 8103884330
              </p>
              <p>
                <span className='font-bold'>Account Name:</span> Qwertyuiop
              </p>
            </div>
          </div>
          <div>
            <Link href='https://t.me/+XmGq0SyfcudhMTc0' target='_blank'>
              <h1 className='mb-2 '>
                Once Paymeny is made, kindly click the button below to send
                prove of payment
              </h1>
              <Button className='form-btn flex gap-2'>
                <Image
                  src='/icons/telegram.svg'
                  alt='telegram'
                  width={25}
                  height={25}
                  className='rounded-full'
                />
                <p>Send proof of payment</p>
              </Button>
            </Link>
          </div>
          <div className='mt-4'>
            <Image
              src='/icons/banks0.jpg'
              alt='banks logo'
              width={800}
              height={300}
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default MyBanks
