import StopsButton from "./StopsButton";
import styles from "./styles.module.css";

const Stops = () => {
  return (
    <div className={styles.StopsWrapper}>
      <StopsButton stopsCount={-1}/>
      {Array.from(Array(4).keys()).map(num => <StopsButton stopsCount={num}/>)}
    </div>
  );
};

export default Stops;
