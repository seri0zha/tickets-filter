import { FC } from "react";
import { ITicket } from "../../app/types";
import AirportSection from "./AirportSection";
import CarrierLogo from "./CarrierLogo";
import DateSection from "./DateSection";
import PurchaseButton from "./PurchaseButton";
import styles from "./styles.module.css";
import TimeSection from "./TimeSection";

interface TicketProps {
  ticket: ITicket
}

const Ticket: FC<TicketProps> = ({ticket}) => {
  return (
    <div className={styles.TicketWrapper}>
      <div className={styles.PurchaseSectionWrapper}>
        <CarrierLogo carrier={ticket.carrier}/>
        <PurchaseButton price={ticket.price}/>
      </div>
      <div className={styles.InfoSectionWrapper}>
        <TimeSection
          stops={ticket.stops}
          arrivalTime={ticket.arrival_time}
          departureTime={ticket.departure_time}/>
        <AirportSection
          origin={ticket.origin}
          originName={ticket.origin_name}
          destination={ticket.destination}
          destinationName={ticket.destination_name}/>
        <DateSection 
          departureDate={ticket.departure_date}
          arrivalDate={ticket.arrival_date}/>
      </div>
    </div>
  )
};

export default Ticket;