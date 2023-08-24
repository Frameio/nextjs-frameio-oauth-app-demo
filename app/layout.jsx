import Provider from './components/Provider'
import Header from './components/Header'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'
// import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Frame.io Next.js + OAuth Demo',
    description: 'Next.js, Next Auth, OAuth, video.js, etc'
}

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            className={`${inter.className} h-full scroll-smooth antialiased`}
        >
            {/* <script async type="text/javascript">
                {`window.SILVERMINE_VIDEOJS_CHROMECAST_CONFIG = {
                    preloadWebComponents: true,
                };`}
            </script> */}
            <link rel="icon" href="/frame-io.png" sizes="any" />
            <script async type="text/javascript" src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
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
