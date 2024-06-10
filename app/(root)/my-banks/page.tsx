import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import Image from 'next/image'

const MyBanks = async () => {
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
              subtext='Your Bank Details are below, please note that this cannot be changed except you contact the admin.'
            />
          </header>
        </div>
      </section>

      <div className='p-8 mt-5 mx-auto bg-gray-200 border-2 border-gray-600 rounded-lg'>
        <h1 className='text-gray-700 mb-2'>
          <span className='font-bold'>Name:</span> {loggedIn?.firstName}{' '}
          {loggedIn?.lastName}
        </h1>
        <h1 className='text-gray-700 mb-2'>
          <span className='font-bold'>Bank:</span> {loggedIn?.bankName}
        </h1>
        <h1 className='text-gray-700 mb-2'>
          <span className='font-bold'>Account Number:</span>{' '}
          {loggedIn?.accountNumber}
        </h1>
      </div>

      <div className='mt-auto mx-auto'>
        <Image
          src='/icons/banks0.jpg'
          alt='banks logo'
          width={800}
          height={300}
        />
      </div>
    </>
  )
}

export default MyBanks
