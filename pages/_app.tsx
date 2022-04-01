import '../styles/globals.scss'
import '../styles/portalStyles.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/nav/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
