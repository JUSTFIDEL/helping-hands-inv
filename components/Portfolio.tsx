import HeaderBox from './HeaderBox'
import MyInvestment from './MyInvestment'

const Portfolio = () => {
  return (
    <div>
      <HeaderBox
        title='Portfolios'
        subtext='Choose an Investment that actually suits you'
      />

      <div className='flex flex-col justify-items-center mx-auto gap-2 mt-4 flex-wrap basis-1/2 md:flex-row'>
        <MyInvestment />

        {/* <MyInvestment
          amount={10000}
          plan='Gold'
          duration='1 Month'
          naration='30% return on investment'
        />

        <MyInvestment
          amount={50000}
          plan='Silver'
          duration='1 Month'
          naration='35% return on investment'
        />

        <MyInvestment
          amount={100000}
          plan='Platinium'
          duration='1 Month'
          naration='45% return on investment'
        /> */}
      </div>
    </div>
  )
}

export default Portfolio
