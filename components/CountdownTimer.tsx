'use client'

import { useEffect, useState } from 'react'

interface CountdownTimeProps {
  deadline: Date
  title: string
}

interface CountdownTimeLeft {
  days?: number
  hrs?: number
  mins?: number
  secs?: number
}

const INITIAL_TIME_LEFT = { days: 0, hrs: 0, mins: 0, secs: 0 }

export const CountdownTimer = ({ deadline, title }: CountdownTimeProps) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function calculateTimeLeft(): CountdownTimeLeft {
    let timeLeft: CountdownTimeLeft = {}
    let currentDate = new Date()
    let difference = deadline.getTime() - currentDate.getTime()

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <div className='bg-rose-400 w-[full] grid items-center p-2'>
      <h2 className='text-[16px] text-center font-semibold'>{title}</h2>

      <div className='w-[60%] flex justify-around mx-auto mt-1 bg-gray-200'>
        <div className='text-center'>
          <p className='my-0 mx-1 p-1'>{timeLeft.days}</p>
          <p className='capitalize'>days</p>
        </div>

        <div className='text-center'>
          <p className='my-0 mx-1 p-1'>{timeLeft.hrs}</p>
          <p className='capitalize'>hr</p>
        </div>

        <div className='text-center'>
          <p className='my-0 mx-1 p-1'>{timeLeft.mins}</p>
          <p className='capitalize'>mins</p>
        </div>

        <div className='text-center'>
          <p className='my-0 mx-1 p-1'>{timeLeft.secs}</p>
          <p className='capitalize'>secs</p>
        </div>
      </div>
    </div>
  )
}
