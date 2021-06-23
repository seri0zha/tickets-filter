import { FC } from "react";
import styles from "./styles.module.css";

interface DateSectionProps {
  departureDate: string,
  arrivalDate: string
}

const DateSection: FC<DateSectionProps> = (props) => {
  return (
    <div className={styles.DateSectionWrapper}>
      <div>
        {props.departureDate}
      </div>
      <div>
        {props.arrivalDate}
      </div>
    </div>
  )
};

export default DateSection;