import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { updateUser } from '../../../store/auth/thunks';
import { User } from '../../../Types/Auth';
import Button from '../../UI/Button';
import classes from './Edit.module.scss';

type EditProps = {
  closeEdit: () => void;
  user: User;
}

const Edit: React.FC<EditProps> = ({ closeEdit, user }) => {
  const [firstName, setFistName] = useState('');
  const [lastName, setLastName] = useState('');

  const { accessToken, update } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const onUpdate = () => {
    dispatch(updateUser(accessToken, {
      firstName,
      lastName,
    }, () => {
      closeEdit();
      setFistName('');
      setLastName('');
    }))
  }

  const setInput = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  return (
    <>
      {update.error && <p>{update.error}</p>}
      <div className={classes.conatiner}>
        <div className={`${classes.col} ${classes.end}`}>
          <input
            type="text" 
            name="firstName"
            value={firstName}
            onChange={setInput(setFistName)} 
            placeholder={user.firstName}
          />
          <Button className={classes.btn} onClick={onUpdate} disabled={update.loading}>
            {update.loading && "Chargement..."}
            {!update.loading && "Save"}
          </Button>
        </div>
        <div className={classes.col}>
          <input 
            type="text"
            name="lastName"
            value={lastName}
            onChange={setInput(setLastName)}
            placeholder={user.lastName}
          />
          <Button className={classes.btn} onClick={closeEdit} >Cancel</Button>
        </div>
      </div>
    </>
  )
}

export default Edit;