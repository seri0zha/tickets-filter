import { FC } from "react";
import { getFormatDate } from "../../../api/formatDateTime";
import styles from "./styles.module.css";

interface DateSectionProps {
  departureDate: string,
  arrivalDate: string
}

const DateSection: FC<DateSectionProps> = (props) => {
  return (
    <div className={styles.DateSectionWrapper}>
      <div>
        {getFormatDate(props.departureDate)}
      </div>
      <div>
        {getFormatDate(props.arrivalDate)}
      </div>
    </div>
  )
};

export default DateSection;