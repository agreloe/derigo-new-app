import React, {useRef} from 'react'
import lottie from "lottie-web/build/player/lottie_light";
import derigoLogo from '../assets/img/logo-derigo-lottie.json';
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import { gsap, Expo } from "gsap/dist/gsap";

export default function Loader() {
    const container = useRef()
    useIsomorphicLayoutEffect(()=>{
        const instance = lottie.loadAnimation({
            container: document.querySelector("#derigo-logo-loader"),
            animationData: derigoLogo,
            renderer: "svg",
            loop: false,
            autoplay: true,
        });
        gsap.to(
            container.current,
            {
                delay: 1.8,
                duration: .2,
                opacity: 0,
                ease: Expo.easeOut
            }
        )
        return () => instance.destroy();
    },[])
  return (
    <div ref={container} className="flex justify-center items-center w-screen h-screen bg-[#f8f8ff]">
        <div id="derigo-logo-loader" className='w-[300px] h-[200px]'></div>
    </div>
  )
}
