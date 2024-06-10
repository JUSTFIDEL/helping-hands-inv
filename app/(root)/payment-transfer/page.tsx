import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const PaymentPage = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
              type='greeting'
              title='Hello,'
              user={loggedIn?.firstName || 'Guest'}
              subtext='Check all your transactions here.'
            />
          </header>
        </div>
      </section>

      <div className='pl-8 mt-5'>
        <h1 className='text-gray-700 font-bold text-2xl'>Transfer Funds</h1>
      </div>
    </>
  )
}

export default PaymentPage
