import classes from './CheckBox.module.scss';

type CheckBoxProps = {
  id: string;
  label: string;
  value: boolean;
  toggle: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label, value, toggle }) => {
  return (
    <div className={classes.wrapper}>
      <input type="checkbox" id={id} checked={value} onChange={toggle} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox;