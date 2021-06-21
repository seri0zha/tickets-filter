import { toggleAllStops } from "../../../../app/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
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
      <input type="checkbox" checked={checked}/>
      Все
    </button>
  );
}

export default AllStops;