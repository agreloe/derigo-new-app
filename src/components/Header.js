import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Header.module.scss'
import logo from '@/assets/img/Derigo_logo_Redesign.svg'
import useIsomorphicLayoutEffect from "@/utils/isomorphicLayoutEffect";
import LocaleSwitcher from '../components/LocaleSwitcher'
import { useTranslation } from "next-i18next";
import ScrollToButton from './ScrollToButton'


export default function Header() {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);



  const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || (prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos);
  };

  const openMenu = () => {
    setToggle(!toggle);

    if (document.body.classList.contains("opacity")) {
      document.body.classList.remove("opacity");
    } else {
      document.body.classList.add("opacity");
    }
  };

  const closeMenu = () => {
    setToggle(false);
    if (document.body.classList.contains("opacity")) {
      document.body.classList.remove("opacity");
    }
  };

  useIsomorphicLayoutEffect(()=>{

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[prevScrollPos, visible, handleScroll])

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrap} ${visible ? '' : styles.hidden}`}>
        <nav className="py-2 px-4 flex justify-between min-h-[80px]">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} width={75} height={75} alt="/"></Image>
        </Link>
        <button
          id="button"
          onClick={openMenu}
          className={`${styles.hamburger} ${!toggle ? "" : styles.open}`}
        >
          <span>Menu</span>
        </button>
        <ul
          className={`nav-items flex items-center gap-4 ${!toggle ? "" : styles.active}`}
        >
            <li onClick={closeMenu}>
                <ScrollToButton toId={`${t("nosotros.Nosotros route")}`} duration={750}>
                  {t("header.Header about")}
                </ScrollToButton>
            </li>
            <li onClick={closeMenu}>
                <ScrollToButton toId={`${t("trabajos.Trabajos route")}`} duration={750}>
                {t("header.Header work")}
                </ScrollToButton>
            </li>
            <li onClick={closeMenu}>
                <ScrollToButton toId={`${t("contacto.Contacto route")}`} duration={750}>
                {t("header.Header contact")}
                </ScrollToButton>
            </li>
            <li onClick={closeMenu}>
              <LocaleSwitcher />
            </li>

        </ul>
        </nav>
      </div>
    </header>
  )
}
