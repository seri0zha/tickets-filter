import { FC } from "react";
import { toggleAllStops, toggleCurrentStop } from "../../../../app/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import styles from "./styles.module.css";

interface ButtonProps {
  stopsCount: number,
}

const StopsButton: FC<ButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  const stops = useAppSelector(state => state.filters.stops);

  let buttonText = "";
  if (props.stopsCount === -1) {
    buttonText = "Все";
  } else {
    buttonText = 
    props.stopsCount === 0 ? "Без пересадок" :
    props.stopsCount === 1 ? "1 пересадка" :
    props.stopsCount >= 2 ? `${props.stopsCount} пересадок` : "";
  }
  
  const onButtonClick = (): void => {
    if (props.stopsCount === -1) {
      dispatch(toggleAllStops());
    } else {
      dispatch(toggleCurrentStop(props.stopsCount as number));
    }
  };

  const activeClassName = (): string => {
    if (props.stopsCount !== -1)
      return stops[props.stopsCount as number] ? styles.selected : "";
    else 
      return (new Set(stops).size === 1 && stops[0]) ? styles.selected : "";
  }

  return (
    <button 
      className={styles.button + " " + activeClassName()}
      onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};

export default StopsButton;
