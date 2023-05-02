import React, {useRef} from 'react'
import styles from '@/styles/Contacto.module.scss'
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import lottie from "lottie-web/build/player/lottie_light";
import emailjs from '@emailjs/browser';
import { init } from "@emailjs/browser";
import derigoLogo from '../../assets/img/logo-derigo-lottie.json';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'

export default function Contact() {
  const contact = useRef()
    const q = gsap.utils.selector(contact);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()
    const ctx = useRef()
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const msg = useRef();
    init("fmCoPVvWrO9k_JDN5");
    useIsomorphicLayoutEffect(()=>{
        lottie.loadAnimation({
            container: document.querySelector("#derigo-logo"),
            animationData: derigoLogo,
            renderer: "svg",
            loop: false,
            autoplay: false,
        });
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
                stagger: 0.15,
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
              q('.form'),
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
          }, contact)

          ScrollTrigger.create({
            trigger: contact.current,
            start: "top 50%",
            end: "bottom top",
            animation: tl.current,
            onEnter: () => {
              lottie.play()
              return () => ctx.current.revert()
            },
          });
    },[])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_w24f2pr",
            "derigo-next-form",
            form.current,
            "fmCoPVvWrO9k_JDN5"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

          setTimeout(() => {
            name.current.value = ""
            email.current.value = ""
            msg.current.value = ""
          }, 500)
      };
  return (
    <section ref={contact} id='contacto' className={`${styles.contacto} container py-16`}>
        <h2 className='title'>Ideamos la mejor solución en frío para tu proyecto.</h2>
        <p className='subtitle'>Contactános</p>
        <span className={`${styles.line} my-12 sm:my-8 line`}></span>

        <div className="flex gap-8 sm:flex-wrap sm:justify-center">
            <div id="derigo-logo" className={`${styles["contacto__lottie"]} sm:order-2`}></div>

            <form ref={form} onSubmit={sendEmail} className='form'>
                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        Nombre
                        </label>
                        <input
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
                        name="from_name"
                        type="text"
                        placeholder="Nombre"
                        ref={name}
                        />
                    </div>
                </div>

                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        Email
                        </label>
                        <input
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
                        name="from_email"
                        type="text"
                        placeholder="Email"
                        ref={email}
                        />
                    </div>
                </div>

                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        Mensaje
                        </label>
                        <textarea
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
                        name="message"
                        type="text"
                        placeholder="Mensaje"
                        ref={msg}
                        />
                    </div>
                </div>
                <input className='button mt-8 float-right' type="submit" value="Enviar" />
            </form>
        </div>


    </section>
  )
}
