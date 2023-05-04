import React, {useState, useRef} from 'react'
import styles from '@/styles/Trabajos.module.scss'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'
import Image from 'next/image';

export default function Trabajos() {
    const trabajos = useRef()
    const q = gsap.utils.selector(trabajos);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()
    const ctx = useRef()

    useIsomorphicLayoutEffect(()=>{

        const text = new SplitType(q('.title'), { types: 'words' })
        const words = text.words

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
                  stagger: 0.25,
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
                q('.box'),
                {
                    y:25,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.25,
                    ease: Expo.easeOut
                }, '-=0.25'
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
            "title":"La Anónima - Centro de Distribución Robotizado",
            "text":"Instalación de 8 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 1045 Hp. Sistema Green High Efficiency.",
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/DSC_0118__1__QMdtHGlES.jpg",
        },
        {
            "title":"Dia% - Centro de Distribución",
            "text":"Instalación de 8 Compresores a Tornillo Bitzer Serie HS-74 con Potencia de 600 Hp.",
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dia-centrodedistribucion-2_scQjOHBhA.jpg",
        },
        {
            "title":"Walmart - Centro de distribución Moreno",
            "text":"Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 795 Hp. Sistema Green High Efficiency.",
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2012-wallmart-moreno-1_7srcup3uN.jpg",
        },
        {
            "title":"Walmart - Centro de distribución Córdoba",
            "text":"Instalación de 6 Compresores a Tornillo Bitzer Serie HS-85 con Potencia de 840 Hp.",
            "img":"https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/2008-wallmart-moreno-5_X_tYhZOnp.jpg",
        },
    ]


  return (
    <section id='trabajos' ref={trabajos} className={`${styles.trabajos} py-16`}>
        <div className="container">
            <h2 className='title'>Nuestro Trabajo</h2>
            <p className='subtitle'>Proyectos destacados</p>
            <span className={`my-12 sm:my-8 line`}></span>
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
        </div>
    </section>
  )
}
