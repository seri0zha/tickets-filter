import { FC } from "react";
import { getFormatTime } from "../../../api/formatDateTime";
import styles from "./styles.module.css";

interface TimeSectionProps {
  departureTime: string,
  arrivalTime: string,
  stops: number
}

const TimeSection: FC<TimeSectionProps> = (props) => {
  return (
    <div className={styles.TimeSectionWrapper}>
      <div>{getFormatTime(props.departureTime)}</div>
      <div className={styles.Stops}>
        {props.stops === 0 ? "Без пересадок" : 
         props.stops === 1 ? "1 пересадка" : `${props.stops} пересадки`}
         <hr/>
      </div>
      <div>{getFormatTime(props.arrivalTime)}</div>
    </div>
  )
};

export default TimeSection;