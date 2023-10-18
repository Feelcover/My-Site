import Link from "next/link";
import styles from "../../styles/Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <img className={styles.logo} src="/images/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
