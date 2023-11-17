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
              <p className={styles.footer__copyright}>
                  © 2023 «Андрей Чебанов»
                </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
