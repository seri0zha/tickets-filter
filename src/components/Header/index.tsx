import styles from './styles.module.css';
import planeLogo from "../../images/plane-logo.png";
import "../../index.css";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper + " gridHeader"}>
      <img className={styles.Logo} src={planeLogo} alt="logo"/>
    </div>
  );
};

export default Header;
