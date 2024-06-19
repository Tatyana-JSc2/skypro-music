import Image from "next/image";
import styles from "./Menu.module.css";
import Link from "next/link";

export const Menu = () => {
    return (
<nav className={styles.main__nav}>
            <div className={styles.nav__logo}>
              <Image src="/img/logo.png" className={styles.logo__image}  width={113.33} height={17} alt="Логотип"/>
            </div>
            <div className={styles.nav__burger}>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
              <span className={styles.burger__line}></span>
            </div>
            <div className={styles.nav__menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link href="#" className={styles.menu__link}>Главное</Link>
                </li>
                <li className={styles.menu__item}>
        <Link href="#" className={styles.menu__link} > Мой плейлист</Link >
                </li >
    <li className={styles.menu__item} >
        <Link href="/signin" className={styles.menu__link} > Войти</Link >
                </li >
              </ul >
            </div >
          </nav >
    );
}