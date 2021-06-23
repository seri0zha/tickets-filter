import { FC } from "react";
import { selectOnlyStop, toggleCurrentStop } from "../../../../app/filtersSlice";
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

  const onOnlyButtonClick = (e: Event): void => {
    e.stopPropagation();
    dispatch(selectOnlyStop(props.stopsCount));
  }

  return (
    <button 
      className={styles.Button}
      onClick={onButtonClick}>
      <CheckboxIcon checked={checked}/>
      <span>
        {buttonText}
      </span>
      <button 
        className={styles.OnlyButton}
        onClick={(e: any) => onOnlyButtonClick(e)}>
        ТОЛЬКО
      </button>
    </button>
  );
};

export default StopsButton;
