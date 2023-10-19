import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import { Link } from "react-scroll";
import styles from "../../styles/Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const isMobile = useMediaQuery(640);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  const handleToggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    if (!burgerOpen) {
      (document.querySelector("body") as HTMLBodyElement).classList.toggle(
        "overflowHidden"
      );
    } else {
      (document.querySelector("body") as HTMLBodyElement).classList.remove(
        "overflowHidden"
      );
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <button
            className={`${styles.burgerMenu} ${burgerOpen ? styles.open : ""}`}
            onClick={handleToggleBurger}
          >
            <span />
            <span />
            <span />
          </button>
        )}
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Обо мне
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Навыки
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Портфолио
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                className={styles.header__nav__list__item__link}
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Обратная связь
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
