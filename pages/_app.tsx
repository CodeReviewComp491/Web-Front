import '../styles/globals.css'
import type { IncomingMessage } from 'http';
import cookie from 'cookie';
import type { AppProps, AppContext } from 'next/app';

//store
import { wrapper } from 'store/store';

//hooks
import useAuth from 'hooks/useAuth';


function MyApp({ Component, pageProps }: AppProps) {
  useAuth();
  return <Component {...pageProps} />
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || '');
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default wrapper.withRedux(MyApp);