import { FC } from "react";
import styles from "./styles.module.css";

const Title: FC = ({children}) => {
  return (
    <h2 className={styles.TitleHeading}>
      {children}
    </h2>
  )
};

export default Title;