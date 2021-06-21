import Currency from './Currency';
import Stops from './Stops';
import styles from './styles.module.css';

const Filters = () => {
  return (
    <div className={styles.FiltersGridWrapper}>
      <div className={styles.FiltersWrapper}>
        <Currency/>
        <Stops/>
      </div>
    </div>
  );
};

export default Filters;
