import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./Portfolio.module.scss";


interface IPortfolioTabContentItems {
  items: { id: number; img: string; link: string; title: string }[];
}

const PortfolioTabContent: FC<IPortfolioTabContentItems> = ({ items }) => {
  return (
    <li className={styles.portfolio__list__item}>
      {items.map((item) => (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        key={item.id}
        >
            
        </motion.div>
      ))}
    </li>
  );
};

export default PortfolioTabContent;
