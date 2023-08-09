import Provider from './components/Provider'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BBC Distribution Streaming App Example',
  description: 'Next.js, Next Auth, OAuth, video.js, etc'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
