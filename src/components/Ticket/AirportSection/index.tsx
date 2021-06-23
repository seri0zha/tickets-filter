import { FC } from "react";
import styles from "./styles.module.css";

interface AirportSectionProps {
  origin: string,
  originName: string,
  destination: string,
  destinationName: string
}

const AirportSection: FC<AirportSectionProps> = (props) => {
  return (
    <div className={styles.AirportSectionWrapper}>
      <div>
        {props.origin + ", " + props.originName}
      </div>
      <div>
        {props.destination + ", " + props.destinationName}
      </div>
    </div>
  )
};

export default AirportSection;