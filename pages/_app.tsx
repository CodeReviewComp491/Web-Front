import '../styles/globals.css'
import type { IncomingMessage } from 'http'
import cookie from 'cookie'
import type { AppProps, AppContext } from 'next/app'
import ReactNotification from 'react-notifications-component'

//store
import { wrapper } from 'store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactNotification />
      <Component {...pageProps} />
    </>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  }
}

export default wrapper.withRedux(MyApp)
