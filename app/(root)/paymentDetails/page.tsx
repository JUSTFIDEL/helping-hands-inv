import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import Image from 'next/image'
import React from 'react'

const page = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Hello'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Make payment into any of the account details below.'
          />
        </header>

        <div className='flex flex-col justify-between h-80%'>
          <div className='md:flex flex-wrap gap-8 p-6'>
            <div className='mb-8'>
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

            <div className='mb-8'>
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

            <div className='mb-8'>
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

            <div className='mb-8'>
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
          <div className='mt-8'>
            <Image
              src='/icons/banks0.jpg'
              alt='banl logo'
              width={600}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
