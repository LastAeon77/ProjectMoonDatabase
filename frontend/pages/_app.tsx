import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

// axios.defaults.baseURL = "http://aeonmoon.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:8000/";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  if (pageLoading) {
    return (
      <div className="bg-loading bg-fixed overflow-auto w-screen h-screen">
      </div>
    );
  } else {
    return (
      <div className="font-lor font-extrabold text-xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    );
  }
  // return ({pageLoading ? (<div>Loading</div>) : <Component {...pageProps} />})
  // return (<Component {...pageProps} />)
}

export default MyApp;
