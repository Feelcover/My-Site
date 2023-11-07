import styles from "./Portfolio.module.scss";

interface IPortfolioSliderItem {
    title: string; 
    img: string;
    link: string;
}

const PortfolioSliderItem = ({ title, img, link }: IPortfolioSliderItem) => (
    <a className={styles.portfolio__slide__link} href={link} target="_blank">
    <div className={styles.portfolio__slide}>
        
            <span className={styles.portfolio__slide__inner}>
                <span className={styles.portfolio__slide__text}>{title}</span>
            </span>
            <img className={styles.portfolio__slide__img} src={img} alt={title} />
        
    </div>
    </a>
);

export default PortfolioSliderItem;