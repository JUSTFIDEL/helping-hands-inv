'use client'

import Link from 'next/link'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance = 0,
}: TotalBalanceBoxProps) => {
  const [bal, setBal] = useState(0)
  const [paid, setPaid] = useState(false)
  const [due, setDue] = useState(false)
  const router = useRouter()

  let myBal: number

  const invest1 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(5000 + 5000 * 0.3)
    }
  }

  const invest2 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(10000 + 10000 * 0.3)
    }
  }

  const invest3 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(20000 + 20000 * 0.3)
    }
  }

  const invest4 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(50000 + 50000 * 0.3)
    }
  }

  const invest5 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(100000 + 100000 * 0.3)
    }
  }

  const invest6 = () => {
    if (!paid) {
      router.push('/paymentDetails')
    }

    if (paid) {
      setBal(500000 + 500000 * 0.3)
    }
  }

  return (
    <>
      <section className='total-balance relative'>
        <div className='total-balance-chart'>
          <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6'>
          {/* <h2 className='header-2'>Investment(s): {totalBanks}</h2> */}
          <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>Total Current Balance</p>

            <div className='total-balance-amount flex-center gap-2'>
              <AnimatedCounter amount={bal} />
            </div>
          </div>
        </div>
        <Button className='form-btn absolute right-4 bottom-4' disabled={!due}>
          Withdraw
        </Button>
      </section>

      <section className='flex flex-col justify-items-center mx-auto gap-2 mt-4 flex-wrap basis-1/2 md:flex-row'>
        <div className='flex flex-col my-2 mx-auto' onClick={invest1}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-gray-700 bg-bank-gradient'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦5,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Starter
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Starter League
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>15 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>30% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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

        <div className='flex flex-col my-2 mx-auto' onClick={invest2}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-gray-700'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦10,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Silver
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Silver League
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>15 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>30% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon bg-gray-400'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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

        <div className='flex flex-col my-2 mx-auto' onClick={invest3}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-yellow-700'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦20,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Gold
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Gold League
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>15 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>30% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon bg-yellow-400'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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

        <div className='flex flex-col my-2 mx-auto' onClick={invest4}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-purple-700'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦50,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Platinium
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Platinium League
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>15 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>40% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon bg-purple-400'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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

        <div className='flex flex-col my-2 mx-auto' onClick={invest5}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-green-700'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦200,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Diamond
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Diamond League
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>30 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>50% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon bg-green-400'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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

        <div className='flex flex-col my-2 mx-auto' onClick={invest6}>
          <Link href='/' className='bank-card'>
            <div className='bank-card_content bg-fuchsia-700'>
              <div>
                <h1 className='text-16 font-semibold text-white'>₦500,000</h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                  Master
                </p>
              </div>

              <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='text-12 font-semibold text-white'>
                    Master Plan
                  </h1>
                  <h2 className='text-12 font-semibold text-white'>30 Days</h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                  <span className='text-16'>50% return on investment</span>
                </p>
              </article>
            </div>

            <div className='bank-card_icon bg-fuchsia-400'>
              <Image
                src='/icons/Paypass.svg'
                width={20}
                height={24}
                alt='pay'
              />

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
      </section>
    </>
  )
}

export default TotalBalanceBox
