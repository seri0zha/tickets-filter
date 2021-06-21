import { toggleAllStops } from "../../../../app/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import CheckboxIcon from "./CheckboxIcon";
import styles from "./styles.module.css";

const AllStops = () => {
  const dispatch = useAppDispatch();
  const checked = useAppSelector(state => {
    return new Set(state.filters.stops).size === 1 && state.filters.stops[0];
  });
  const onAllStopsButtonClick = () => {
    dispatch(toggleAllStops());
  }
  return (
    <button 
      className={styles.button}
      onClick={onAllStopsButtonClick}>
        <CheckboxIcon checked={checked}/>
      Все
    </button>
  );
}

export default AllStops;