import React from 'react'
import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={`${styles.footer} py-2 px-4 flex justify-center min-h-[80px]`}>
        <ul className='text-center'>
            <li>
                <span>DeRigo Refrigeration Argentina | <a href='mailto: info@derigoargetina.com.ar' target='_blank' rel='noreferrer'>info@derigoargetina.com.ar</a></span>
            </li>
            <li>
                <span>Copyright © 2023 derigoargentina.com | Todos los derechos reservados</span>
            </li>
        </ul>
    </footer>
  )
}
