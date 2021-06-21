import Currency from './Currency';
import Stops from './Stops';
import '../../index.css';
import styles from './styles.module.css';


const Filters = () => {
  return (
    <div className={"gridFilters"}>
      <div className={styles.FiltersWrapper}>
        <Currency/>
        <Stops/>
      </div>
    </div>
  );
};

export default Filters;
