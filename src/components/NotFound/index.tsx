import { toggleAllStops } from "../../app/filtersSlice";
import { useAppDispatch } from "../../app/hooks";
import ButtonOrange from "../ButtonOrange";
import styles from "./styles.module.css";

const NotFound = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.NotFoundWrapper}>
      <div>
        Упс! Билеты не найдены...
      </div>
      <ButtonOrange onClick={() => dispatch(toggleAllStops())}>
        Расслабить фильтры
      </ButtonOrange>
    </div>

  )
};

export default NotFound;