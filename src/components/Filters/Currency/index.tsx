import { currencyType } from '../../../app/types';
import Title from '../Title';
import SelectButton from './SelectButton';
import styles from './styles.module.css';

const Currency = () => {
  const currencyList: currencyType[] = ["RUB", "USD", "EUR"];

  return (
    <>
      <Title>ВАЛЮТА</Title>
      <div className={styles.FiltersWrapper}>
      {currencyList.map(curr => <SelectButton currency={curr}/>)}
    </div>
    </>
  );
};

export default Currency;
