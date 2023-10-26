import React from "react";
import MainTitle from "../MainTitile/MainTitle";
import styles from "./Skills.module.scss";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <MainTitle text="Навыки" />
      </div>
      <div className="subContainer">
        <ul className={styles.skills__list}>
        <SkillsItem
            title="Языки"
            text="HTML, CSS, JavaScript/Typescript"
            imageClass={styles.skills__lang}
          />
          <SkillsItem
            title="Разработка Frontend"
            text="SASS/SCSS, ReactJS, NextJS"
            imageClass={styles.skills__front}
          />
          <SkillsItem
            title="Разработка Backend"
            text="Node, Nest, Express"
            imageClass={styles.skills__back}
          />
          <SkillsItem
            title="Базы Данных"
            text="MongoDB, PostrgeSQL, MariaDB, MySQL"
            imageClass={styles.skills__base}
          />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
