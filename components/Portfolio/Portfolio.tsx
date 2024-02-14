import {
  hiddenPortfolioItemsArray,
  portfolioItemsAdaptive,
  portfolioItemsAll,
  portfolioItemsMobileAll,
  portfolioItemsReact,
} from "../../utils/portfolioArr";
import React, { useState } from "react";
import MainTitle from "../MainTitile/MainTitle";
import PortfolioTab from "./PortfolioTab";
import PortfolioTabContent from "./PortfolioTabContent";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks";
import { motion } from "framer-motion";
import PortfolioSlider from "./PortfolioSlider";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const isMobile = useMediaQuery(1080);

  const [tab, setTab] = useState({
    tabAll: true,
    tabReact: false,
    tabAdaptive:false
  });
  const [hiddenAllItems, setHiddenAllItems] = useState(true);
  const toggleHiddenAllItems = () => {
    setHiddenAllItems(!hiddenAllItems);
  };
  const showTabAll = () => {
    setTab({ tabAll: true, tabReact: false, tabAdaptive:false });
  };

  const showTabReact = () => {
    setTab({ tabAll: false, tabReact: true, tabAdaptive:false });
    setHiddenAllItems(true)
  };
  const showTabAdaptive = () => {
    setTab({ tabAll: false, tabReact: false, tabAdaptive:true });
  };

  const tabController = [
    { id: 1, title: "Все проекты", isActive: tab.tabAll, handler: showTabAll },
    { id: 2, title: "React", isActive: tab.tabReact, handler: showTabReact },
    { id: 3, title: "Адаптивная вёрстка", isActive: tab.tabAdaptive, handler: showTabAdaptive }
  ];
  return (
    <motion.div
    transition={{
      delay: 0.3,
      ease: "linear",
      duration: 0.5,
    }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="Портфолио" />
      </div>
      <div className="subContainer">
        <div className={styles.portfolio__inner}>
          <ul className={styles.portfolio__tabs}>
            {tabController.map((item) => (
              <PortfolioTab
                key={item.id}
                title={item.title}
                isActive={item.isActive}
                handleShowTab={item.handler}
              />
            ))}
          </ul>
        </div>
        {!isMobile && (
          <ul className={styles.portfolio__list}>
            {tab.tabAll && <PortfolioTabContent items={portfolioItemsAll} />}
            <AnimatePresence>
              {!hiddenAllItems && (
                <PortfolioTabContent items={hiddenPortfolioItemsArray} />
              )}
            </AnimatePresence>
          </ul>
        )}
        {!isMobile && (
          <ul className={styles.portfolio__list}>
            {tab.tabReact && <PortfolioTabContent items={portfolioItemsReact} />}
          </ul>
        )}
        {!isMobile && (
          <ul className={styles.portfolio__list}>
            {tab.tabAdaptive && <PortfolioTabContent items={portfolioItemsAdaptive} />}
          </ul>
        )}
        {!isMobile && !tab.tabReact && !tab.tabAdaptive && (
          <div className={styles.portfolio__wrapper}>
            <button
              className={styles.portfolio__more}
              onClick={toggleHiddenAllItems}
            >
              <span className={styles.portfolio__more__text}>
                {!hiddenAllItems ? "Свернуть" : "Показать еще проекты"}
              </span>
              <span className={styles.portfolio__more__border} />
            </button>
          </div>
        )}
      </div>
      {isMobile && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {tab.tabAll && <PortfolioSlider tabItems={portfolioItemsMobileAll} />}
            {tab.tabReact && <PortfolioSlider tabItems={portfolioItemsReact} />}
            {tab.tabAdaptive && <PortfolioSlider tabItems={portfolioItemsAdaptive} />}
          </div>
        </div>
      )}
    </section>
    </motion.div>
  );
};

export default Portfolio;