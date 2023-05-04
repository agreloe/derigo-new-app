import React from 'react'
import styles from '@/styles/BrandSlider.module.scss'
import Image from 'next/image'

export default function BrandSlider({images}) {

  return (

        <div className={`${styles.slider}`}>
            <ul>
                {
                    images.map((img, index)=>(
                        <li key={index} >
                            <Image alt='/' src={img.url} width={0} height={0} sizes="100vw" priority={true}></Image>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}
