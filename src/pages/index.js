import React, { Fragment } from "react"
import ScrollRestorationDisabler from "@/utils/scrollRestorationDisabler"
import Banner from "@/components/home/Banner"
import About from "@/components/home/About"
import Work from "@/components/home/Work"
import Contact from "@/components/home/Contact"
import Nosotros from "@/components/home/Nosotros"
import Trabajos from "@/components/home/Trabajos"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <ScrollRestorationDisabler>
      <title>
            {t("metadata.Metadata title")}
          </title>
          <meta
            name="title"
            content={`${t("metadata.Metadata title")}`}
          ></meta>
          <meta
            name="description"
            content={`${t("metadata.Metadata description")}`}
          ></meta>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://derigoargentina.com/" />
          <meta property="og:title" content={`${t("metadata.Metadata title")}`} />
          <meta property="og:description" content={`${t("metadata.Metadata description")}`} />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/derigo-meta-img_BttwDMO22.png"
          />
      </ScrollRestorationDisabler>
      
      <Banner />
      <Nosotros />
      <Trabajos />
      <Contact />
    </Fragment>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
