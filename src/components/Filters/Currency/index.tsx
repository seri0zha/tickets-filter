import { currencyType } from '../../../app/types';
import SelectButton from './SelectButton';
import styles from './styles.module.css';

const Currency = () => {
  const currencyList: currencyType[] = ["RUB", "USD", "EUR"];

  return (
    <div className={styles.FiltersWrapper}>
      {currencyList.map(curr => <SelectButton currency={curr}/>)}
    </div>
  );
};

export default Currency;
