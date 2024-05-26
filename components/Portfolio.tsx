import HeaderBox from './HeaderBox'
import MyInvestment from './MyInvestment'

const Portfolio = () => {
  return (
    <div>
      <div>
        <HeaderBox
          title='Portfolios'
          subtext='Choose an Investment that actually suits you'
        />
      </div>
      <div className='flex flex-col justify-items-center mx-auto gap-4'>
        <div>
          <MyInvestment
            amount={5000}
            plan='Starter'
            duration='1 Month'
            naration='30% return on investment'
          />
        </div>
        <div>
          <MyInvestment
            amount={10000}
            plan='Gold'
            duration='1 Month'
            naration='30% return on investment'
          />
        </div>
        <div>
          <MyInvestment
            amount={50000}
            plan='Silver'
            duration='1 Month'
            naration='35% return on investment'
          />
        </div>
        <div>
          <MyInvestment
            amount={100000}
            plan='Platinium'
            duration='1 Month'
            naration='45% return on investment'
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
