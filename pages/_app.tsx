import '../styles/globals.scss'
import '../styles/portalStyles.scss'
import theme from "../styles/_exports.module.scss";
import type { AppProps } from 'next/app'
import Navbar from '../components/nav/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.tabColor} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
