import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
      <link rel='canonical' href='https://derigoargentina.com/' />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <meta name="theme-color" content="#f8f8ff" />
    <meta name="title"
        content="Instalaciones de frío con la mejor tecnología y mayor ahorro energético | DeRigo Argentina">
    </meta>
    <meta name="description"
        content="Empresa líder en instalaciones de frío con 40 años de experiencia. Utilizamos la mejor tecnología para ofrecer soluciones eficientes y ahorro energético.">
    </meta>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://derigoargentina.com/" />
    <meta property="og:title"
        content="Instalaciones de frío con la mejor tecnología y mayor ahorro energético | DeRigo Argentina" />
    <meta property="og:description"
        content="Empresa líder en instalaciones de frío con 40 años de experiencia. Utilizamos la mejor tecnología para ofrecer soluciones eficientes y ahorro energético." />
    <meta property="og:image" content="https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/derigo-meta-img_BttwDMO22.png" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
