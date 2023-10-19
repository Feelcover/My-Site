import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="subContainer">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>Web Development</h1>
          <p className={styles.hero__description}>
            Вы работаете над чем-то великим? Я с удовольствием помогу вам в этом! Напишите мне письмо и мы начнем проект прямо сейчас!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
