import { FC } from "react";
import styles from "./styles.module.css";

import TK from "../../../images/turkishAirlines.png";
import S7 from "../../../images/s7Airlines.png";
import BA from "../../../images/britishAirways.png";
import SU from "../../../images/aeroflot.png";

interface CarrierLogoProps {
  carrier: string,
}

type imagesType = {
  [key: string]: string;
}

const images: imagesType = {
  "SU": SU,
  "TK": TK,
  "S7": S7,
  "BA": BA
}

const CarrierLogo: FC<CarrierLogoProps> = ({carrier}) => {
  return (
    <img 
      src={images[carrier]} 
      alt="carrier logo"
      className={styles.CarrierLogo}/>
  )
}

export default CarrierLogo;