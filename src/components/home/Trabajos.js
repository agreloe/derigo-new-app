import React, {useState, useRef} from 'react'
import styles from '@/styles/Trabajos.module.scss'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'
import Image from 'next/image';
import BrandSlider from '../BrandSlider';
import { useTranslation } from "next-i18next";

export default function Trabajos() {
  const { t } = useTranslation();
    const trabajos = useRef()
    const q = gsap.utils.selector(trabajos);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()
    const ctx = useRef()

    useIsomorphicLayoutEffect(()=>{

        const text = new SplitType(q('.title'), { types: 'words' })
        const words = text.words

        const textSubtitle = new SplitType(q('.title2'), { types: 'words' })
        const wordSubtitle = textSubtitle.words

          ctx.current = gsap.context(()=>{
              tl.current = gsap
              .timeline()
              .fromTo(
                words,
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.2,
                  ease: Expo.easeOut
                }
              )
              .fromTo(
                q('.subtitle1'),
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  ease: Expo.easeOut
                }, '-=0.4'
              )
              .to(
                q('.line1'),
                {
                  width: 100,
                  ease: Expo.easeOut
                }, '-=0.4'
              )
              .fromTo(
                q('.box'),
                {
                    y:25,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    ease: Expo.easeOut
                }, '-=0.4'
              )
              .fromTo(
                wordSubtitle,
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.25,
                  ease: Expo.easeOut
                }, '-=0.4'
              )
              .fromTo(
                q('.subtitle2'),
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  ease: Expo.easeOut
                }, '-=0.4'
              )
              .to(
                q('.line2'),
                {
                  width: 100,
                  ease: Expo.easeOut
                }, '-=0.4'
                )
                .fromTo(
                  q('.slider'),
                  {
                    opacity: 0,
                    ease: Expo.easeOut
                  },
                  {
                    opacity: 1,
                    ease: Expo.easeOut
                  }, '-=0.4'
              )
            }, trabajos)

            ScrollTrigger.create({
                trigger: trabajos.current,
                start: "top 50%",
                end: "bottom top",
                animation: tl.current,
                onEnter: () => {
                  return ()=> ctx.current.revert()
                },
              });
      },[])

    const [open, setOpen] = useState(false)
    const [selectedRow, setSelectedRow] = useState(undefined);
    const onSelectedRow = (index) => {
        setSelectedRow(index);
        setOpen(true)
        if(selectedRow === index) {
            setOpen(!open)
        }
    };

    const list = [
        {
            "title": t("trabajos.Trabajos item1Title"),
            "text": t("trabajos.Trabajos item1Text"),
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/DSC_0118__1__QMdtHGlES.jpg",
        },
        {
            "title": t("trabajos.Trabajos item2Title"),
            "text": t("trabajos.Trabajos item2Text"),
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-2_scQjOHBhA.jpg",
        },
        {
            "title": t("trabajos.Trabajos item3Title"),
            "text": t("trabajos.Trabajos item3Text"),
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-1_7srcup3uN.jpg",
        },
        {
            "title": t("trabajos.Trabajos item4Title"),
            "text": t("trabajos.Trabajos item4Text"),
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2008-wallmart-moreno-5_X_tYhZOnp.jpg",
        },
    ]

    const images = [
      {
          'url':'https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_Jumbo_Cencosud.png'
      },
      {
          'url':'https://upload.wikimedia.org/wikipedia/commons/f/fc/Logo_Vea_Cencosud.png'
      },
      {
          'url':'https://1000marcas.net/wp-content/uploads/2020/11/Carrefour-Logo.png'
      },
      {
          'url':'https://upload.wikimedia.org/wikipedia/commons/3/3e/Norte.png'
      },
      {
          'url':'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png'
      },
      {
          'url':'https://www.laanonima.com.ar/contents/themes/responsive/img/img_LA.png'
      },
      {
          'url':'https://www.dogoseguridad.com.ar/images/logos-clientes/logo1.png'
      },
      {
          'url':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Disco-Supermarket-Logo.svg/1200px-Disco-Supermarket-Logo.svg.png'
      },
      {
          'url':'https://logos-world.net/wp-content/uploads/2022/04/Dia-Emblem.png'
      },
      {
          'url':'https://inverlat.com.ar/images/fenoglio_logo.png'
      },
    ]

    const imagesCopy = images

    const imagesDoubled = [].concat(images,imagesCopy)



  return (
    <section id={`${t("trabajos.Trabajos route")}`} ref={trabajos} className={`${styles.trabajos} py-16`}>
        <div className="container">
            <h2 className='title'>{t("trabajos.Trabajos title")}</h2>
            <p className='subtitle subtitle1'>{t("trabajos.Trabajos subtitle")}</p>
            <span className={`my-12 sm:my-8 line line1`}></span>
            <div className="flex flex-wrap">
                {
                    list.map((item,index)=>(

                        <div key={index} className={`box w-full ${styles.box}`} onClick={()=>onSelectedRow(index)}>
                            <div className={`${styles['box__title']} ${open && selectedRow === index ? `${styles.rotate}` : ``}`}>
                                <h4>{item.title}</h4>
                            </div>
                            <div className={`${styles["box__content"]} ${open && selectedRow === index ? `${styles.active}` : ``}`}>
                                <p>{item.text}</p>
                                <Image className={`${styles["box__content__img"]}`} src={item.img} alt='/' width={0} height={0} sizes="100vw"></Image>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h3 className='pt-16 title2'>{t("trabajos.Trabajos clientsTitle")}</h3>
            <p className='subtitle subtitle2'>{t("trabajos.Trabajos clientsSubtitle")}</p>
            <span className={`my-12 sm:my-8 line line2`}></span>

            <BrandSlider images={imagesDoubled} />

        </div>
    </section>
  )
}
