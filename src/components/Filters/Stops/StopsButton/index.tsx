import { FC } from "react";
import { toggleCurrentStop } from "../../../../app/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import styles from "./styles.module.css";
import CheckboxIcon from "./CheckboxIcon";

interface ButtonProps {
  stopsCount: number,
}

const StopsButton: FC<ButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  let checked = useAppSelector(state => state.filters.stops[props.stopsCount]);
  let buttonText =
    props.stopsCount === 0 ? "Без пересадок" :
    props.stopsCount === 1 ? "1 пересадка" :
    props.stopsCount >= 2 ? `${props.stopsCount} пересадок` : "";
  
  const onButtonClick = (): void => {
    dispatch(toggleCurrentStop(props.stopsCount as number));
  };

  return (
    <button 
      className={styles.button}
      onClick={onButtonClick}>
      <CheckboxIcon checked={checked}/>
      {buttonText}
    </button>
  );
};

export default StopsButton;
