import React, {useRef} from 'react'
import styles from '@/styles/About.module.scss'
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'

export default function About() {
    const about = useRef()
    const q = gsap.utils.selector(about);
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
                //duration: 1,
                ease: Expo.easeOut
              }
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
              }, '-=0.25'
            )
          }, about)

          ScrollTrigger.create({
            trigger: about.current,
            start: "top 50%",
            end: "bottom top",
            animation: tl.current,
            onEnter: () => {
              return ()=> ctx.current.revert()
            },
          });
    },[])

  return (
    <section ref={about} id='nosotros' className={`${styles.about} container flex justify-between py-16 flex-wrap md:gap-8`}>
        <div className={`${styles['about__title']}`}>
            <h2 className='title'>Sobre nosotros</h2>
            <p className='subtitle'>Nuestra trayectoria</p>
            <span className={`${styles.line} my-12 sm:my-8 line`}></span>
        </div>
        <ul className={`${styles['about__text']}`}>
          <li className='card'>Con más de 40 años de experiencia en instalaciones Frigoríficas, estamos ubicados en el primer lugar en Argentina en lo que se refiere a ejecución de Obras con compresores a Tornillo.</li>
          <li className='card'>Hemos llevado a cabo la Ingeniería, Instalación y Puesta en Marcha de los más importantes Centros de Distribución del país.</li>
          <li className='card'>Trabajamos con tecnologías Green High Efficiency basadas en la aplicación de estrategias de ahorro energético como Low Condensing y Hot Gas Defrost, con las cuales hemos logrado un ahorro de energía de más del 30%.</li>
          <li className='card'>Contamos con la respresentación oficial en Argentina de <a href="https://webercooling.com/en/" rel='noreferer' target="_blank">Weber Cooling</a>, empresa de los Países Bajos dedicada a la fabricación de cámaras de enfriamiento al vacío.</li>
        </ul>
    </section>
  )
}
