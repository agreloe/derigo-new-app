import React, {useRef} from 'react'
import Carousel, { CarouselItem } from '../Carousel'
import { useTranslation } from "next-i18next";

export default function Banner() {
    const slides = [
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/proyect-2018_Iki2mN0sV.jpg"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-5_e2j-yAWlk.jpg"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2008-wallmart-moreno-3_CH6s1X4D6.jpg"
        },
    ]
    const { t } = useTranslation();
  return (
    <section className='mt-[80px]'>
        <Carousel slides={1} width={100} text={t("banner.Banner title")} description={t("banner.Banner subtitle")}>
            {
                slides.map((slide, index)=>(
                    <CarouselItem
                        key={index}
                        img={slide.img}
                        height="60vh"
                        width="100%"
                        gradientColor="rgba(255, 255, 255, 0)"
                        brightness={0.5}
                    ></CarouselItem>
                ))
            }
        </Carousel>
    </section>
  )
}
