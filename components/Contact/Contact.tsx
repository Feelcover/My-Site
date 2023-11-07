import { useMediaQuery } from "../../hooks";
import { motion } from "framer-motion";
import MainTitle from "../MainTitile/MainTitle";
import SocialBar from "../SocialBar/SocialBar";
import Arrow from "../Arrow/Arrow";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  const isMobile485 = useMediaQuery(485);

  return (
    <motion.div
      transition={{
        delay: 0.2,
        ease: "linear",
        duration: 0.5,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <section className={styles.contact} id="contact">
        <div className="container">
          <MainTitle text="Напишите мне" />
        </div>
        <div className="subContainer">
          <div className={styles.contact__inner}>
            <div className={styles.contact__left}>
              <p className={styles.contact__text}>
                Жду ваши контакты для быстрого старта проекта! <br />
                Напишите мне свои контактные данные и я оперативно свяжусь с
                Вами!
              </p>
              {!isMobile485 && (
                <>
                  <h3 className={styles.contact__title}>
                    <span className={styles.contact__title__text}>
                      Я в соцсетях:
                    </span>
                    <span className={styles.contact__title__arrow}>
                      <Arrow />
                    </span>
                    <span className={styles.contact__title__border} />
                  </h3>
                  <SocialBar />
                </>
              )}
            </div>
            <div className={styles.contact__right}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
