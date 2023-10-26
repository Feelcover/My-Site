import React from "react";
import MainTitle from "../MainTitile/MainTitle";
import styles from "./Portfolio.module.scss"

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="porfolio">
      <div className="container">
      <MainTitle text="Портфолио" />
      </div>
      <div className="subContainer">

      </div>
    </section>
  );
};

export default Portfolio;
