import Title from "../Title";
import StopsButton from "./StopsButton";
import styles from "./styles.module.css";

const Stops = () => {
  return (
    <>
      <Title>КОЛИЧЕСТВО ПЕРЕСАДОК</Title>
      <div className={styles.StopsWrapper}>
        <StopsButton stopsCount={-1}/>
        {Array.from(Array(4).keys()).map(num => <StopsButton stopsCount={num}/>)}
    </div>
    </>
  );
};

export default Stops;
