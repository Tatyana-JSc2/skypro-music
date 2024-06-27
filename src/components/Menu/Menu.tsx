"use client"
import Image from "next/image";
import styles from "./Menu.module.css";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    //setIsOpen(!isOpen);
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image src="/img/logo.png" className={styles.logoImage} width={113.33} height={17} alt="Логотип" />
      </div>
      <div className={styles.navBurger} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={classNames(styles.navMenu, { [styles.closeMenu]: !isOpen })} >
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink}>Главное</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#" className={styles.menuLink} > Мой плейлист</Link >
          </li >
          <li className={styles.menuItem} >
            <Link href="/signin" className={styles.menuLink} > Войти</Link >
          </li >
        </ul >
      </div >
    </nav >
  );
}