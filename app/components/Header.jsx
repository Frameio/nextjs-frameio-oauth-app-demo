import Link from 'next/link'
import Image from 'next/image'
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          <li className='text-sm'>
            <Link href='/'>
              <Image height={72} width={128} src='/bbc-logo.png' alt='BBC Logo' />
            </Link>
          </li>
          {/* <li className='text-sm'>
            <Link href='/protected/player/video_1'>Video 1</Link>
          </li>
          <li className='text-sm'>
            <Link href='/protected/player/video_2'>Video 2</Link>
          </li> */}
          <li className='text-sm'>
            <Link href='/protected/server'>Review Link Demo</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
