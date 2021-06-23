import { FC } from "react";
import styles from "./styles.module.css";

interface TimeSectionProps {
  departureTime: string,
  arrivalTime: string,
  stops: number
}

const TimeSection: FC<TimeSectionProps> = (props) => {
  return (
    <div className={styles.TimeSectionWrapper}>
      <div>{props.departureTime}</div>
      <div>{props.stops}</div>
      <div>{props.arrivalTime}</div>
    </div>
  )
};

export default TimeSection;