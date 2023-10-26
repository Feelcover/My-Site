import React, { FC } from 'react'
import styles from "./Skills.module.scss";

interface ISkillsItem {
    text:string;
    title: string;
    imageClass:string;
}


const SkillsItem:FC<ISkillsItem> = ({text, title, imageClass}) => {
  return (
    <li className={styles.skills__item}>
        <h3 className={`${styles.skills__title} ${imageClass}`}>
            <span className={styles.skills__title__text}>{title}</span>
            <span className={styles.skills__title__border}/>
        </h3>
        <p className={styles.skills__text}>{text}</p>
    </li>
  )
}

export default SkillsItem