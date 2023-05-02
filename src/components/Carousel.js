import React, {useState, Children, cloneElement, useRef} from 'react'
import styles from '@/styles/Carousel.module.scss'
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/isomorphicLayoutEffect';
import SplitType from 'split-type'

export const CarouselItem = ({img, height, width, brightness, text}) => {
    return (
      <div className={`${styles["carousel__inner__item"]}`} style={{backgroundImage:`url("${img}")`, height:`${height}`, width:`${width}`, filter:`brightness(${brightness})`}}>
        {text && (
          <p className={`${styles["carousel__inner__item__text"]}`}>{text}</p>
        )}
      </div>
      );
};

export default function Carousel({children, slides, width, text, description}) {
    const carousel = useRef()
    const q = gsap.utils.selector(carousel);
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
              q('.description'),
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
          }, carousel)

          return ()=> ctx.current.revert()
    },[])

    const [activeIndex, setActiveIndex] = useState(0);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const updateIndex = (param) => {
      let newIndex = param;

      if (newIndex <= 0) {
        newIndex = 0;
        setShowLeft(false);
      } else if (newIndex >= Children.count(children)- slides) {
        newIndex = Children.count(children) - slides;
        setShowRight(false);
      } else if (newIndex > 0 && newIndex < Children.count(children)) {
        setShowLeft(true);
        setShowRight(true);
      }

      setActiveIndex(newIndex);
    };
  return (
    <div ref={carousel} className={`${styles.carousel}`}>
        <div className={`${styles["carousel__inner"]}`} style={{transform: `translateX(-${activeIndex * width}%`}}>
            {Children.map(children, child => {
                return cloneElement(child);
            })}
        </div>

        <div className={`${styles["carousel__content"]}`}>
              <button className={`${styles["carousel__content__arrow"]}`} type="button" style={{opacity: showLeft ? 1 : 0}} onClick={()=>{updateIndex(activeIndex - 1);}}>&#8249;</button>
              {
                text && (
                    <div className={`${styles['carousel__content__body']} text-left sm:text-center`}>

                        <h1 className='title'>{text}</h1>
                        <p className='description'>{description}</p>

                    </div>
                )
              }
              <button className={`${styles["carousel__content__arrow"]}`} type="button" style={{opacity: showRight ? 1 : 0}} onClick={()=>{updateIndex(activeIndex + 1);}}>&#8250;</button>
        </div>
    </div>
  )
}
