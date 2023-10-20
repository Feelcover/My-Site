import { useMediaQuery } from "@/hooks";
import React from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.scss";

const Hero = () => {
  const isMobile = useMediaQuery(800)
  return (
    <section className={styles.hero} style={{backgroundImage: `url('/images/hero-bg.jpg')`}}>
      <div className="subContainer">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>Web Development</h1>
          <p className={styles.hero__description}>
            Вы работаете над чем-то великим? Я с удовольствием помогу вам в
            этом! Напишите мне письмо и мы начнем проект прямо сейчас!
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.hero__btn}
          >
            Связаться со разработчиком
          </Link>
          {!isMobile && <Link
            to="about"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.hero__arrow}
          />}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
