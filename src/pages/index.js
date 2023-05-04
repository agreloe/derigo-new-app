import React, { Fragment } from "react"
import ScrollRestorationDisabler from "@/utils/scrollRestorationDisabler"
import Banner from "@/components/home/Banner"
import About from "@/components/home/About"
import Work from "@/components/home/Work"
import Contact from "@/components/home/Contact"
import Nosotros from "@/components/home/Nosotros"
import Trabajos from "@/components/home/Trabajos"
import Head from "next/head"

export default function Home() {
  return (
    <Fragment>
      <Head>
      <title>
            Instalaciones de frío con la mejor tecnología y mayor ahorro energético | DeRigo Argentina
          </title>
          <meta
            name="title"
            content="Instalaciones de frío con la mejor tecnología y mayor ahorro energético | DeRigo Argentina"
          ></meta>
          <meta
            name="description"
            content="En DeRigo Argentina, somos expertos en instalaciones de frío con la mejor tecnología y el mayor ahorro energético. Ofrecemos soluciones personalizadas para ayudarle a reducir su consumo de energía y mejorar su eficiencia. Contacte con nosotros para obtener más información sobre cómo podemos ayudarle."
          ></meta>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://derigoargentina.com/" />
          <meta property="og:title" content="Instalaciones de frío con la mejor tecnología y mayor ahorro energético | DeRigo Argentina" />
          <meta property="og:description" content="En DeRigo Argentina, somos expertos en instalaciones de frío con la mejor tecnología y el mayor ahorro energético. Ofrecemos soluciones personalizadas para ayudarle a reducir su consumo de energía y mejorar su eficiencia. Contacte con nosotros para obtener más información sobre cómo podemos ayudarle." />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/derigo-meta-img_BttwDMO22.png"
          />
      </Head>
      <Banner />
      <Nosotros />
      <Trabajos />
      <Contact />
    </Fragment>
  )
}
