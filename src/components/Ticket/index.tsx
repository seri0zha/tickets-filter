import { FC } from "react";
import { ITicket } from "../../app/types";
import PurchaseButton from "./PurchaseButton";
import styles from "./styles.module.css";

interface TicketProps {
  ticket: ITicket
}

const Ticket: FC<TicketProps> = ({ticket}) => {
  return (
    <div className={styles.TicketWrapper}>
      <div className={styles.PurchaseSection}>
        <PurchaseButton price={ticket.price}/>
      </div>
      <div className={styles.InfoSection}>
        
      </div>
    </div>
  )
};

export default Ticket;