import '../styles/globals.css'
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import { useState,useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  if(pageLoading)
  {
    return <div>Loading</div>
  }
  else
  {
    return <Component {...pageProps} />
  }
  // return ({pageLoading ? (<div>Loading</div>) : <Component {...pageProps} />})
  // return (<Component {...pageProps} />)
}

export default MyApp
