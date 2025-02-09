import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/background.webp'
import test from '@/images/test.webp'
import geometric from '@/images/geometric.svg'
import startupSummit from '@/images/startup-summit.png'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <Image
        className={clsx(
          'absolute top-0 blur-3xl sm:blur-lg brightness-100 opacity-30',
          position === 'left' &&
            'left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]',
          position === 'right' &&
            'left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]',
        )}
        src={geometric}
        alt=""
        width={900}
        height={1495}
        priority
        unoptimized
      />
    </div>
  )
}

export function BackgroundImageMountain({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden bg-indigo-50',
        className,
      )}
    >
      <Image
        className={clsx(
          'absolute top-0 blur-3xl sm:blur-xl opacity-40 sm:opacity-100',
          position === 'left' &&
            'left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]',
          position === 'right' &&
            'left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]',
        )}
        src={startupSummit}
        alt=""
        width={1860}
        height={1495}
        priority
        unoptimized
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white" />
    </div>
  )
}

