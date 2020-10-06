import React, { Fragment, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import '../styles/globals.css'
import Copyright from '../components/copyright'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Go User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
      <Copyright/>
    </Fragment>
  )
}

export default MyApp
