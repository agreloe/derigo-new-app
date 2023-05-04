import React, {useRef} from 'react'
import styles from '@/styles/Nosotros.module.scss'
import Image from 'next/image'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'

export default function Nosotros() {
    const cards = [
        {
            "icon":"https://img.icons8.com/ios/100/3e4ba3/service--v1.png",
            "title":"Experiencia",
            "text":"Hemos llevado a cabo la Ingeniería, Instalación y Puesta en Marcha de los más importantes Centros de Distribución del país.",
        },
        {
            "icon":"https://img.icons8.com/ios/100/3e4ba3/environment-care.png",
            "title":"Ahorro energético",
            "text":"Trabajamos con tecnologías Green High Efficiency basadas en la aplicación de estrategias de ahorro energético como Low Condensing y Hot Gas Defrost, con las cuales hemos logrado un ahorro de energía de más del 30%.",
        },
        {
            "icon":"https://img.icons8.com/ios/100/3e4ba3/approval.png",
            "title":"Respresentación Internacional",
            "text":"Contamos con la respresentación oficial en Argentina de Weber Cooling, empresa de los Países Bajos dedicada a la fabricación de cámaras de enfriamiento al vacío.",
        },
    ]
    const nosotros = useRef()
    const q = gsap.utils.selector(nosotros);
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
                q('.text'),
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
            .fromTo(
                q('.img'),
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
            .fromTo(
                q('.card'),
                {
                  y: 25,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.25,
                  ease: Expo.easeOut
                }
              )

        }, nosotros)

        ScrollTrigger.create({
            trigger: nosotros.current,
            start: "top 50%",
            end: "bottom top",
            animation: tl.current,
            onEnter: () => {
              return ()=> ctx.current.revert()
            },
          });
    },[])
  return (
    <section id='nosotros' ref={nosotros} className={`${styles.nosotros}`}>
        <div className="container flex items-center justify-between gap-8 sm:flex-wrap sm:justify-center py-16">
            <div className='w-[50%] sm:w-[100%]'>
                <h2 className='title'>Sobre nosotros</h2>
                <p className="subtitle">Nuestra trayectoria</p>
                <span className={`my-12 sm:my-8 line`}></span>
                <p className='text'>Con más de 40 años de experiencia en instalaciones Frigoríficas, estamos ubicados en el primer lugar en Argentina en lo que se refiere a ejecución de Obras con compresores a Tornillo.</p>

            </div>
            <Image className={`${styles.img} img`} src={'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/DSC_0294_2_0z4TqMwtN.jpg'} alt="Foto de obra de compresor a tornillo" width={0} height={0} sizes="100vw"></Image>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-1'>
            {
                cards.map((card, index)=>(
                    <div key={index} className={`${styles.card} card`}>
                        <Image src={card.icon} width={64} height={64} alt='Imagen de icono decorativo'></Image>
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
