import React from 'react';
import classes from './TextField.module.scss';

type TextFieldProps = {
  id: string;
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  hasError: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ id, type, label, onBlur, onChange, value, hasError }) => {
  return (
    <div className={classes.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onBlur={onBlur} onChange={onChange} value={value} />
      {hasError && <p className={classes.error}>Please enter valid {label} !</p>}
    </div>
  )
}

export default TextField;