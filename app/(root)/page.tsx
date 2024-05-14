import HeaderBox from '@/components/HeaderBox'
import RightSIdebar from '@/components/RightSIdebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'JustFidel',
    lastName: 'Adang',
    email: 'justfidel2022@gmail.com',
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your investments efficiently.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSIdebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  )
}

export default Home
