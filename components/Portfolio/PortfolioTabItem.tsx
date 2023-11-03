import styles from './Portfolio.module.scss';

interface IPortfolioTabItem {
    title: string; 
    img: string;
    link: string;
}

const PortfolioTabItem = ({ title, img, link }: IPortfolioTabItem) => (
    <div className={styles.portfolio__list__inner}>
        <a className={styles.portfolio__list__item__link} href={link}>
            <img className={styles.portfolio__list__item__img} src={img} alt={title} />
            <h3 className={styles.portfolio__list__item__title}>{title}</h3>
        </a>
    </div>
);

export default PortfolioTabItem;