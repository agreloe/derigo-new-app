import '@/styles/globals.scss'
import React, { Fragment, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';

const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
const font = `font-family: monospace`
const signature = 'agreloe'
console.log(littleCat,font,signature);

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)
  useIsomorphicLayoutEffect(()=>{
    setTimeout(() => setLoading(false), 2000)
  },[])
  return (
    <Fragment>
      {
        loading ? (
            <Loader></Loader>
          ) : (
            <Fragment>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Fragment>

          )
        }
    </Fragment>

  )
}
