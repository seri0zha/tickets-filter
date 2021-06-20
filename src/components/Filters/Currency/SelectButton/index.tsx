import { FC } from 'react';
import { switchCurrency } from '../../../../app/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { currencyType } from '../../../../app/types';
import styles from './styles.module.css';

interface SelectButtonProps {
  currency: currencyType
}

const SelectButton: FC<SelectButtonProps> = (props) => {

  const activeCurrency = useAppSelector(state => state.filters.currency);
  const dispatch = useAppDispatch();

  const className = styles.button + " " + (activeCurrency === props.currency ? styles.active : "");
  const onButtonClick = () => {
    dispatch(switchCurrency(props.currency));
  }

  return (
    <button 
      className={className}
      onClick={onButtonClick}>
      {props.currency}
    </button>
  );
};

export default SelectButton;
