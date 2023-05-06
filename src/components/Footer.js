import React from 'react'
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={`py-2 px-4 flex justify-center min-h-[80px]`}>
        <ul className='text-center sm:text-[12px]'>
            <li>
                <span>DeRigo Refrigeration Argentina | <a href='mailto: info@derigoargetina.com.ar' target='_blank' rel='noreferrer'>info@derigoargetina.com.ar</a></span>
            </li>
            <li>
                <span>{`Copyright © 2023 derigoargentina.com | ${t("footer.Footer rights")}`}</span>
            </li>
        </ul>
    </footer>
  )
}
