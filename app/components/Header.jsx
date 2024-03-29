import Link from 'next/link'
import Image from 'next/image'
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100' style={{ minHeight: '6rem', position: 'sticky' }}>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          <li style={{ width: '200px' }}>
            <Link href='/'>
              <Image height={72} width={128} src='/frameio-wordmark-black.png' alt='Company Logo' />
            </Link>
          </li>
          <li className='text-sm' style={{ width: '200px' }}>
            <Link href='/protected/review-link'>Review Link Demo</Link>
          </li>
          <li style={{ width: '200px', display: 'block' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', margin: 'auto 0' }}>
              <SignInButton />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
