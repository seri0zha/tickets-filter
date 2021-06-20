import { FC } from "react";
import { ITicket } from "../../app/types";
import styles from "./styles.module.css";

interface TicketProps {
  ticket: ITicket
}

const Ticket: FC<TicketProps> = ({ticket}) => {
  return (
    <div 
      className={styles.TicketWrapper}>
      {Object.keys(ticket).map(key => <div>{ticket[key as keyof ITicket]}</div>)}
    </div>
  )
};

export default Ticket;