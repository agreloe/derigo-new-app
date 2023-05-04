import React, { useRef } from 'react'
import styles from '@/styles/Work.module.scss'
import Carousel, { CarouselItem } from '../Carousel'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'
import useMediaQuery from '@/utils/useMediaQuery';

export default function Work() {
    const work = useRef()
    const q = gsap.utils.selector(work);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()
    const ctx = useRef()

    const isBreakpoint = useMediaQuery(767.9)

    const slides = [
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2019-frutillas_6aBWTLfD-.jpg",
            "text":"Proyecto 1"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/DSC_0118__1__iZjOanwaN.jpg",
            "text":"Proyecto 2"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-1_7srcup3uN.jpg",
            "text":"Proyecto 3"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-2_scQjOHBhA.jpg",
            "text":"Proyecto 4"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-1_9xsw_1d7o.jpg",
            "text":"Proyecto 5"
        },
        {
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2014-la-anonima-10_-2ZPjhdfd.jpg",
            "text":"Proyecto 6"
        },
    ]

    useIsomorphicLayoutEffect(()=>{

        const text = new SplitType(q('.title'), { types: 'words' })
        const words = text.words

          ctx.current = gsap.context(()=>{
              tl.current = gsap
              .timeline()
              .fromTo(
                work.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    ease: Expo.easeOut
                }
              )
              .fromTo(
                words,
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.25,
                  //duration: 1,
                  ease: Expo.easeOut
                }, '-=0.25'
              )
              .fromTo(
                q('.subtitle'),
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  ease: Expo.easeOut
                }, '-=0.25'
              )
              .to(
                q('.line'),
                {
                  width: 100,
                  ease: Expo.easeOut
                }, '-=0.25'
              )
              .fromTo(
                q('.carousel-wrapper'),
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  ease: Expo.easeOut
                }, '-=0.25'
              )
            }, work)

            ScrollTrigger.create({
                trigger: work.current,
                start: "top 50%",
                end: "bottom top",
                animation: tl.current,
                onEnter: () => {
                  return ()=> ctx.current.revert()
                },
              });
      },[])

  return (
    <section ref={work} id='trabajos' className={`${styles.work} py-16`}>
        <div className="container">
            <h2 className='title'>Nuestro Trabajo</h2>
            <p className='subtitle'>Proyectos destacados</p>
            <span className={`my-12 sm:my-8 line`}></span>
            <div className="carousel-wrapper">
                <Carousel slides={isBreakpoint ? 1 : 2} width={isBreakpoint ? 100 : 50 }>
                    {
                        slides.map((slide, index)=>(
                            <CarouselItem
                                key={index}
                                img={slide.img}
                                height={isBreakpoint ? '50vh' : '60vh'}
                                width={isBreakpoint ? '100%' : '50%'}
                                gradientColor="rgba(255, 255, 255, 0)"
                                brightness={1}
                                text={slide.text}
                            ></CarouselItem>
                        ))
                    }
                </Carousel>
            </div>

        </div>
    </section>
  )
}
