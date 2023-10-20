import { useMediaQuery } from "@/hooks";
import gsap from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.scss";

const Hero = () => {
  const isMobile = useMediaQuery(800);
  const title = useRef() as MutableRefObject<HTMLHeadingElement>;

  useEffect(() => {
    const colors = gsap.to(title.current, {
      paused: true,
      duration: 20,
      repeat: -1,
      "--hue": 360,
    });

    const doRandom = () => {
      gsap
        .timeline()
        .to(title.current, {
          duration: 0.1,
          opacity: function () {
            return gsap.utils.random(0.9, 0.95);
          },
          delay: function () {
            return gsap.utils.random(0.1, 2);
          },
        })
        .to(title.current, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          },
        });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery || !mediaQuery.matches) {
      colors.play();
      doRandom();
    }
  }, []);

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
    >
      <div className="subContainer">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title} ref={title}>
            Web Development
          </h1>
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
            className={styles.hero__button}
          >
            Связаться со разработчиком
          </Link>
          {!isMobile && (
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className={styles.hero__arrow}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
