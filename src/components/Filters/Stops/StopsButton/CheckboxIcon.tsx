import { FC } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { IconContext } from "react-icons";

interface CheckboxProps {
  checked: boolean
}

const CheckboxIcon: FC<CheckboxProps> = (props) => {
  return (
    <IconContext.Provider 
      value={{color: "#2196f3", style: {marginRight: '10px'}}}>
      {props.checked ? 
      <ImCheckboxChecked size={14}/> :
      <ImCheckboxUnchecked size={14}/>}
    </IconContext.Provider>
  )
};

export default CheckboxIcon;