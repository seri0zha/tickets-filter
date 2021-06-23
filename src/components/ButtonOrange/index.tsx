import { FC } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  onClick?: () => void
}

const ButtonOrange: FC<ButtonProps> = ({onClick, children}) => {
  return (
    <button 
      onClick={onClick}
      className={styles.button}>
      {children}
    </button>
  )
};

export default ButtonOrange;