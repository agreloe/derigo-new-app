import React, {useRef} from 'react'
import styles from '@/styles/Contacto.module.scss'
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import lottie from "lottie-web/build/player/lottie_light";
import emailjs from '@emailjs/browser';
import { init } from "@emailjs/browser";
import derigoLogo from '../../assets/img/logo-derigo-lottie.json';
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();
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

    const successAnim = () => {
      const anim = gsap.context(()=>{
        gsap.to(
          q('.success'),
          {
            opacity: 1,
            y:0,
            ease: Expo.easeOut
          }
        )
        return () => anim.revert()
      })
    }

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
              setTimeout(() => {
                lottie.play()
              }, 1000);
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
            successAnim()
          }, 500)
      };
  return (
    <section ref={contact} id={`${t("contacto.Contacto route")}`} className={`${styles.contacto} container py-16`}>
        <h2 className='title'>{t("contacto.Contacto title")}</h2>
        <p className='subtitle'>{t("contacto.Contacto subtitle")}</p>
        <span className={`my-12 sm:my-8 line`}></span>

        <div className="flex gap-8 sm:flex-wrap justify-between sm:justify-center">
            <div id="derigo-logo" className={`${styles["contacto__lottie"]} sm:order-2`}></div>

            <form ref={form} onSubmit={sendEmail} className='form w-[50%] sm:w-full'>
                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        {t("contacto.Contacto formName")}
                        </label>
                        <input
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#00bd29]"
                        name="from_name"
                        type="text"
                        placeholder={t("contacto.Contacto formName")}
                        ref={name}
                        required
                        />
                    </div>
                </div>

                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        {t("contacto.Contacto formEmail")}
                        </label>
                        <input
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#00bd29]"
                        name="from_email"
                        type="text"
                        placeholder={t("contacto.Contacto formEmail")}
                        ref={email}
                        required
                        />
                    </div>
                </div>

                <div className="inline-flex flex-wrap w-full">
                    <div className="w-full">
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                        {t("contacto.Contacto formMessage")}
                        </label>
                        <textarea
                        className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#00bd29]"
                        name="message"
                        type="text"
                        placeholder={t("contacto.Contacto formMessage")}
                        ref={msg}
                        required
                        />
                    </div>
                </div>
                <div className="form-footer flex items-center justify-between">
                  <p className={`text-[#00bd29] success ${styles.success}`}>{t("contacto.Contacto formSuccess")}</p>
                  <input className='button my-4 float-right' type="submit" value={`${t("contacto.Contacto button")}`} />
                </div>
            </form>
        </div>


    </section>
  )
}
