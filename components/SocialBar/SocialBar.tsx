import styles from "./SocialBar.module.scss";

const SocialBar = () => {
  return (
    <ul className={styles.social__bar}>
      <li className={styles.social__bar__item}>
        <a
          href="https://t.me/Feelcover"
          className={styles.social__bar__item__link}
        >
          <span
            className={`${styles.social__bar__item__link__icon} ${styles.social__bar__item__link__icon__tg}`}
          >
            <img
              className={styles.social__bar__item__link__img}
              src="/images/telegram.svg"
              alt="Telegram"
            />
          </span>
          <span className={styles.social__bar__item__link__text}>Telegram</span>
        </a>
      </li>
      <li className={styles.social__bar__item}>
        <a
          href="https://vk.com/begi_bratishka"
          className={styles.social__bar__item__link}
        >
          <span
            className={`${styles.social__bar__item__link__icon} ${styles.social__bar__item__link__icon__vk}`}
          >
            <img
              className={styles.social__bar__item__link__img}
              src="/images/vk.svg"
              alt="ВКонтакте"
            />
          </span>
          <span className={styles.social__bar__item__link__text}>
            ВКонтакте
          </span>
        </a>
      </li>
      <li className={styles.social__bar__item}>
        <a href="https://github.com/Feelcover" className={styles.social__bar__item__link}>
          <span
            className={`${styles.social__bar__item__link__icon} ${styles.social__bar__item__link__icon__gh}`}
          >
            <img
              className={styles.social__bar__item__link__img}
              src="/images/github.svg"
              alt="GitHub"
            />
          </span>
          <span className={styles.social__bar__item__link__text}>Github</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
