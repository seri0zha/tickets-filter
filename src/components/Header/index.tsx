import styles from './styles.module.css';
import planeLogo from "../../images/plane-logo.png";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <img className={styles.Logo} src={planeLogo} alt="logo"/>
    </div>
  );
};

export default Header;
