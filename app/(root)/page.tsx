import HeaderBox from '@/components/HeaderBox'
import RightSIdebar from '@/components/RightSIdebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn?.name || 'Guest'}
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

      {/* <RightSIdebar
        user={loggedIn}
        transactions={[]}
        // banks={[{ currentBalance: 8000 }, { currentBalance: 600 }]}
        banks={[]}
      /> */}
    </section>
  )
}

export default Home
