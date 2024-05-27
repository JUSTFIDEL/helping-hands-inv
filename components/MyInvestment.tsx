import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyInvestment = ({
  amount,
  plan,
  duration,
  naration,
}: InvestmentCardProps) => {
  return (
    <>
      <div className='flex flex-col my-2 mx-auto'>
        <Link href='/' className='bank-card'>
          <div className='bank-card_content bg-gray-700 bg-bank-gradient'>
            <div>
              <h1 className='text-16 font-semibold text-white'>N{amount}</h1>
              <p className='font-ibm-plex-serif font-black text-white'>
                {plan}
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h1 className='text-12 font-semibold text-white'>
                  {plan} Plan
                </h1>
                <h2 className='text-12 font-semibold text-white'>{duration}</h2>
              </div>
              <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-16'>{naration}</span>
              </p>
            </article>
          </div>

          <div className='bank-card_icon'>
            <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />

            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={32}
              alt='mastercard'
              className='ml-5'
            />
          </div>

          <Image
            src='/icons/lines.svg'
            width={316}
            height={190}
            alt='lines'
            className='absolute top-0 left-0'
          />
        </Link>
      </div>

      <div className='flex flex-col my-2 mx-auto'>
        <Link href='/' className='bank-card'>
          <div className='bank-card_content bg-yellow-700'>
            <div>
              <h1 className='text-16 font-semibold text-white'>N{amount}</h1>
              <p className='font-ibm-plex-serif font-black text-white'>
                {plan}
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h1 className='text-12 font-semibold text-white'>
                  {plan} Plan
                </h1>
                <h2 className='text-12 font-semibold text-white'>{duration}</h2>
              </div>
              <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-16'>{naration}</span>
              </p>
            </article>
          </div>

          <div className='bank-card_icon bg-yellow-400'>
            <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />

            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={32}
              alt='mastercard'
              className='ml-5'
            />
          </div>

          <Image
            src='/icons/lines.svg'
            width={316}
            height={190}
            alt='lines'
            className='absolute top-0 left-0'
          />
        </Link>
      </div>

      <div className='flex flex-col my-2 mx-auto'>
        <Link href='/' className='bank-card'>
          <div className='bank-card_content bg-gray-700'>
            <div>
              <h1 className='text-16 font-semibold text-white'>N{amount}</h1>
              <p className='font-ibm-plex-serif font-black text-white'>
                {plan}
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h1 className='text-12 font-semibold text-white'>
                  {plan} Plan
                </h1>
                <h2 className='text-12 font-semibold text-white'>{duration}</h2>
              </div>
              <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-16'>{naration}</span>
              </p>
            </article>
          </div>

          <div className='bank-card_icon bg-gray-400'>
            <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />

            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={32}
              alt='mastercard'
              className='ml-5'
            />
          </div>

          <Image
            src='/icons/lines.svg'
            width={316}
            height={190}
            alt='lines'
            className='absolute top-0 left-0'
          />
        </Link>
      </div>

      <div className='flex flex-col my-2 mx-auto'>
        <Link href='/' className='bank-card'>
          <div className='bank-card_content bg-purple-700'>
            <div>
              <h1 className='text-16 font-semibold text-white'>N{amount}</h1>
              <p className='font-ibm-plex-serif font-black text-white'>
                {plan}
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h1 className='text-12 font-semibold text-white'>
                  {plan} Plan
                </h1>
                <h2 className='text-12 font-semibold text-white'>{duration}</h2>
              </div>
              <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-16'>{naration}</span>
              </p>
            </article>
          </div>

          <div className='bank-card_icon bg-purple-400'>
            <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />

            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={32}
              alt='mastercard'
              className='ml-5'
            />
          </div>

          <Image
            src='/icons/lines.svg'
            width={316}
            height={190}
            alt='lines'
            className='absolute top-0 left-0'
          />
        </Link>
      </div>
    </>
  )
}

export default MyInvestment
