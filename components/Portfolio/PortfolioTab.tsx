import React, { FC } from "react";
import Arrow from "../Arrow/Arrow";
import styles from "./Portfolio.module.scss";

interface IPortfolioTabControl {
  title: string;
  isActive: boolean;
  handleShowTab: () => void;
}

const PortfolioTab: FC<IPortfolioTabControl> = ({
  title,
  isActive,
  handleShowTab,
}) => {
  return (
    <li className={styles.portfolio__tabs__item}>
      <button
        className={styles.portfolio__tabs__item__btn}
        onClick={handleShowTab}
      >
        <span
          className={styles.portfolio__tabs__item__btn__text}
          style={{ color: isActive ? "#F2F2F2" : "#B7BFD1" }}
        >
          {title}
        </span>
        {isActive && (
          <span className={styles.portfolio__tabs__item__btn__arrow}>
            <Arrow />
          </span>
        )}
        <span
          className={`
            ${styles.portfolio__tabs__item__btn__border} ${
            isActive ? styles.portfolio__tabs__item__btn__border_active : ""
          }`}
        />
      </button>
    </li>
  );
};

export default PortfolioTab;
