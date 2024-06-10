import HeaderBox from '@/components/HeaderBox'
import RightSIdebar from '@/components/RightSIdebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
// import MyInvestment from '@/components/MyInvestment'
// import Portfolio from '@/components/Portfolio'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your investments efficiently.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={0}
          />
        </header>

        {/* <Portfolio /> */}
      </div>

      <RightSIdebar
        user={loggedIn}
        transactions={[]}
        // banks={[{ currentBalance: 8000 }, { currentBalance: 600 }]}
        // banks={[]}
      />
    </section>
  )
}

export default Home
