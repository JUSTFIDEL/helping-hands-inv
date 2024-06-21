import HeaderBox from '@/components/HeaderBox'
import RightSIdebar from '@/components/RightSIdebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getInvestment, getInvestments } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'
// import MyInvestment from '@/components/MyInvestment'
// import Portfolio from '@/components/Portfolio'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  if (!loggedIn) redirect('/sign-in')

  const investments = await getInvestments({ userId: loggedIn.$id })

  // if(!investments) return;

  // const appwriteItemId = (id as string) || investments?.appwriteItemId
  const appwriteItemId = (id as string) || investments?.appwriteItemId

  const investment = await getInvestment({ appwriteItemId })

  console.log({
    // investments?.data,
    appwriteItemId,
    investment,
  })

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
            totalCurrentBalance={investment?.invAmount}
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
