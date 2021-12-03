import React from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import { useAppDispatch, useAppSelector } from '../../store';
import { login } from '../../store/auth/thunks';
import { isEmail, isNotEmpty } from '../../utils/validators';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import TextField from '../UI/TextFiled';
import classes from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const { isValid: isValidEmail, register: registerEmail } = useInput(isEmail);
  const { isValid: isValidPassword, register: registerPassword } = useInput(isNotEmpty);
  const [remember, toggleRemember] = useToggle(false);

  const error = useAppSelector(state => state.auth.error)
  const dispatch = useAppDispatch();

  const formValid = isValidEmail && isValidPassword

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formValid) return;

    dispatch(login({ 
      email: registerEmail.value,
      password: registerPassword.value,
      remember 
    }))
  }

  return (
    <form onSubmit={submitHandler}>
      {error && <p className={classes.error}>{error}</p>}
      <TextField id="username" label="Username" type="text" {...registerEmail} />
      <TextField id="password" label="Password" type="password" {...registerPassword} />
      <CheckBox id="remember-me" label="Remember me" value={remember} toggle={toggleRemember} />
      <Button disabled={!formValid} type="submit" className={classes.button}>Sign In</Button>
    </form>
  )
}

export default LoginForm;