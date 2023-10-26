import React, { useState } from "react";
import MainTitle from "../MainTitile/MainTitle";
import styles from "./Portfolio.module.scss";
import PortfolioTab from "./PortfolioTab";

const Portfolio = () => {
  const [tab, setTab] = useState({
    tabAll: true,
    tabStatic: false,
    tabReact: false,
  });
  const [hiddenAllItems, setHiddenAllItems] = useState(true);
  const toggleHiddenAllItems = () => {
    setHiddenAllItems(!hiddenAllItems);
  };
  const showTabAll = () => {
    setTab({ tabAll: true, tabStatic: false, tabReact: false });
  };
  const showTabStatic = () => {
    setTab({ tabAll: false, tabStatic: true, tabReact: false });
  };
  const showTabReact = () => {
    setTab({ tabAll: false, tabStatic: false, tabReact: true });
  };

  const tabController = [
    { id: 1, title: "Все проекты", isActive: tab.tabAll, handler: showTabAll },
    {
      id: 2,
      title: "Статические сайты",
      isActive: tab.tabStatic,
      handler: showTabStatic,
    },
    { id: 3, title: "React", isActive: tab.tabReact, handler: showTabReact },
  ];
  return (
    <section className={styles.portfolio} id="porfolio">
      <div className="container">
        <MainTitle text="Портфолио" />
      </div>
      <div className="subContainer">
        <div className={styles.portfolio__inner}>
          <div className={styles.portfolio__inner__wrapper}>
            {tabController.map((item) => (
              <PortfolioTab
                key={item.id}
                title={item.title}
                isActive={item.isActive}
                handleShowTab={item.handler}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
