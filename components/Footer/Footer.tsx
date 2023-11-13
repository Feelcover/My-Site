import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <span className={styles.footer} />
      </div>
    </footer>
  );
};

export default Footer;
