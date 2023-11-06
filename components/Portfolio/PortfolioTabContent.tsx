import { motion } from "framer-motion";
import { FC } from "react";
import PortfolioTabItem from "./PortfolioTabItem";


interface IPortfolioTabContentItems {
  items: { id: number; img: string; link: string; title: string }[];
}

const PortfolioTabContent: FC<IPortfolioTabContentItems> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <motion.li
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        key={item.id}
        >
            <PortfolioTabItem title={item.title} img={item.img} link={item.link} />
        </motion.li>
      ))}
    </>
  );
};

export default PortfolioTabContent;
