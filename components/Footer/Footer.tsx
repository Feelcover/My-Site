import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <motion.div
      transition={{
        delay: 0.2,
        ease: "linear",
        duration: 0.6,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <footer className={styles.footer}>
        <div className={`container ${styles.footer__container}`}>
          <span className={styles.footer__border} />
          <div className={styles.footer__inner}>
            <div className={styles.footer__left}>
              <Logo />
            </div>
            <div className={styles.footer__right}>
              <div className={styles.footer__right__bottom}>
                <ul className={styles.footer__list}>
                  <li className={styles.footer__list__item}>
                    <Link href="/cookie-policy" legacyBehavior>
                      <a className={styles.footer__list__item__link}>
                        Политика использования файлов cookie
                      </a>
                    </Link>
                  </li>
                  <li className={styles.footer__list__item}>
                    <Link href="/privacy-policy" legacyBehavior>
                      <a className={styles.footer__list__item__link}>
                        Политика конфиденциальности
                      </a>
                    </Link>
                  </li>
                  <li className={styles.footer__list__item}>
                    <Link href="/personal-data-policy" legacyBehavior>
                      <a className={styles.footer__list__item__link}>
                        Политика обработки персональных данных
                      </a>
                    </Link>
                  </li>
                  <li className={styles.footer__list__item}>
                    <Link href="/personal-data-of-clients" legacyBehavior>
                      <a className={styles.footer__list__item__link}>
                        Согласие на обработку персональных данных клиентов -
                        физических лиц
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className={styles.footer__copyright}>
                  © 2023 «Андрей Чебанов»
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
