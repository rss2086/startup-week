'use client'

import { useEffect, useState } from 'react'

function padNumber(num: number): string {
  return num.toString().padStart(2, '0')
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-03-21T09:00:00-04:00') // 9 AM EDT on March 21, 2025

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="inline-flex items-center gap-6 text-center">
      <div>
        <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-sm uppercase tracking-wide text-gray-400">Days</div>
      </div>
      <div className="text-2xl font-bold text-gray-600">:</div>
      <div>
        <div className="text-4xl font-bold text-white">{padNumber(timeLeft.hours)}</div>
        <div className="text-sm uppercase tracking-wide text-gray-400">Hours</div>
      </div>
      <div className="text-2xl font-bold text-gray-600">:</div>
      <div>
        <div className="text-4xl font-bold text-white">{padNumber(timeLeft.minutes)}</div>
        <div className="text-sm uppercase tracking-wide text-gray-400">Minutes</div>
      </div>
      <div className="text-2xl font-bold text-gray-600">:</div>
      <div>
        <div className="text-4xl font-bold text-white">{padNumber(timeLeft.seconds)}</div>
        <div className="text-sm uppercase tracking-wide text-gray-400">Seconds</div>
      </div>
    </div>
  )
} 