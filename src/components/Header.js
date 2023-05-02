import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Header.module.scss'
import logo from '@/assets/img/Derigo_logo_Redesign.svg'

export default function Header() {
    const [toggle, setToggle] = useState(false);

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

  return (
    <header className={`${styles.header}`}>
        <nav className="py-2 px-4 flex justify-between min-h-[80px]">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} width={75} height={75} alt="/"></Image>
        </Link>
        <button
          id="button"
          onClick={openMenu}
          className={`${!toggle ? "" : styles.open}`}
        >
          <span></span>
        </button>
        <ul
          className={`flex items-center gap-4 ${!toggle ? "" : styles.active}`}
        >
            <li>
                <Link href={"/#nosotros"} onClick={closeMenu}>
                Nosotros
                </Link>
            </li>
            <li>
                <Link href={"/#trabajos"} onClick={closeMenu}>
                Trabajos
                </Link>
            </li>
            <li>
                <Link href={"/#contacto"} onClick={closeMenu}>
                Contacto
                </Link>
            </li>
        </ul>
        </nav>
    </header>
  )
}
