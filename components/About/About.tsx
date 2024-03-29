import { useMediaQuery } from "@/hooks";
import React from "react";
import Arrow from "../Arrow/Arrow";
import MainTitle from "../MainTitile/MainTitle";
import SocialBar from "../SocialBar/SocialBar";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const About = () => {
  const isMobile = useMediaQuery(1080);

  return (
    <motion.div
    transition={{
      delay: 0.5,
      ease: "linear",
      duration: 0.5,
    }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
    <section id="about" className={styles.about}>
      <div className="container">
        <MainTitle text="Обо мне" />
      </div>
      <div className={`'subContainer' ${styles.about__sub_container}`}>
        <img
          className={styles.about__img}
          src="/images/about.jpg"
          alt="avatar"
        />
        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            Андрей Чебанов
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <Arrow />
              </span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>
          <div className={styles.about__text}>
            <p>Web-разработчик<br/>
              Понравились мои работы? <br/> Xотите так же? <br/> Связь со мной по ссылкам ниже.
            </p>
            <p>
              Стэк: JS/TS (ES6+), React, Next, NodeJS, Express, Nest.
            </p>
          </div>
          <div className={styles.about__social}>
            {!isMobile && <SocialBar />}
          </div>
        </div>
      </div>
      <div className="sub-container">
        <div className={styles.about__social__mobile}>
          {isMobile && <SocialBar />}
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
