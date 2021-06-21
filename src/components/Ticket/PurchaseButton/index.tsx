import { FC } from "react";
import styles from "./styles.module.css";

interface TicketProps {
  price: number
}

const PurchaseButton: FC<TicketProps> = ({price}) => {
  return (
    <button className={styles.button}>
      Купить 
      <div> за {price}</div>
    </button>
  )
};

export default PurchaseButton;