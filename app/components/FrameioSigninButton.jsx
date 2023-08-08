'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Button from './Button'

const FrameioSigninButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  return (
    <Button
      className='w-full'
      onClick={() => signIn('frameio', { callbackUrl })}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        data-icon='frameio'
        className='mr-8 w-5'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'
      >
        <style>{".st0{fill:#5b53ff}"}</style>
        <path
          className="st0"
          d="M3.2 484.1c26.8-68 41.2-142.6 41.2-220.2S30 111.7 3.2 43.7C1.9 40.2 1 36.3 1 32.4c0-16 12.6-31.2 30.3-31.2 11.3 0 22.1 6.9 26.4 17.8 29.5 75.9 46 158.2 46 245 0 86.3-16.5 169.1-46 245-4.3 10.8-15.2 17.8-26.4 17.8C13.6 526.6 1 511.5 1 495.4c0-3.9.9-7.8 2.2-11.3zM144.5 429.1c12.1-52.9 18.6-108.4 18.6-165.2s-6.5-112.3-18.6-165.6c-.4-2.2-.9-4.8-.9-6.9 0-16.5 13-30.8 30.3-30.8 13 0 24.7 9.1 27.7 22.1 14 58.1 21.4 118.8 21.4 181.2s-7.4 123.1-21.2 181.2c-3 13-14.7 22.1-27.7 22.1-17.3 0-30.3-14.7-30.3-31.2-.2-2.1.3-4.7.7-6.9zM282.4 263.9c0-27.3-1.3-53.8-3.9-80.2-1.7-18.2 12.1-33.8 29.9-33.8 15.2 0 27.7 11.3 29 26 3 29 4.3 58.1 4.3 88 0 29.5-1.3 59-4.3 88-1.3 14.7-13.9 26-29 26-17.8 0-31.7-16-29.9-33.8 2.6-26.4 3.9-53.3 3.9-80.2zM461 263.9c0 7.4-3 15.2-8.7 20.8L435 302.1c-3.9 3.9-9.1 5.6-13.9 5.6-10 0-19.9-7.8-19.9-19.9v-47.7c0-12.1 10-19.9 19.9-19.9 4.8 0 10 1.7 13.9 5.6l17.3 16.9c5.7 5.6 8.7 13.4 8.7 21.2z"
        />
      </svg>
      Login with Frame.io
    </Button>
  )
}

export default FrameioSigninButton
