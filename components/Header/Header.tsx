import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import stylesMenu from "./HeaderMobileMenu.module.scss";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const isMobile = useMediaQuery(640);
  const currentMenuItemClass = isMobile
    ? stylesMenu.menu__item
    : styles.header__nav__list__item;
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  const handleToggleMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.toggle(
      "overflowHidden"
    );
    setBurgerOpen(!burgerOpen);
  };

  const closeMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.remove(
      "overflowHidden"
    );
    setBurgerOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <button
            className={`${styles.burgerMenu} ${burgerOpen && styles.open}`}
            onClick={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        )}
        <nav
          className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${
            burgerOpen && stylesMenu.open
          }`}
        >
          <ul
            className={`${
              isMobile ? styles.listReset : styles.header__nav__list
            }`}
          >
            <li className={currentMenuItemClass}>
              <motion.div
                transition={{
                  delay: 0.1,
                  ease: "linear",
                  duration: 0.5,
                  x: { duration: 1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  className={styles.header__nav__list__item__link}
                  href="/"
                  to="about"
                  spy={spy}
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  onClick={closeMenu}
                >
                  Обо мне
                </Link>
              </motion.div>
            </li>

            <li className={currentMenuItemClass}>
              <motion.div
                transition={{
                  delay: 0.2,
                  ease: "linear",
                  duration: 0.5,
                  x: { duration: 1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  className={styles.header__nav__list__item__link}
                  href="/"
                  to="skills"
                  spy={spy}
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  onClick={closeMenu}
                >
                  Навыки
                </Link>
              </motion.div>
            </li>

            <li className={currentMenuItemClass}>
              <motion.div
                transition={{
                  delay: 0.3,
                  ease: "linear",
                  duration: 0.5,
                  x: { duration: 1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  className={styles.header__nav__list__item__link}
                  href="/"
                  to="portfolio"
                  spy={spy}
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  onClick={closeMenu}
                >
                  Портфолио
                </Link>
              </motion.div>
            </li>

            <li className={currentMenuItemClass}>
              <motion.div
                transition={{
                  delay: 0.4,
                  ease: "linear",
                  duration: 0.5,
                  x: { duration: 1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  className={styles.header__nav__list__item__link}
                  href="/"
                  to="contact"
                  spy={spy}
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  onClick={closeMenu}
                >
                  Обратная связь
                </Link>
              </motion.div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
