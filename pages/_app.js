import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <title>Tailwind JSX</title>
      </Head>      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
