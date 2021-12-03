import { useState } from 'react';
import { useAppSelector } from '../../store';
import Button from '../UI/Button';
import Edit from './Edit';
import classes from './UserInfo.module.scss';

const UserInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAppSelector(state => state.auth.user);

  if (!user) return <h2>Une erreur est survenue</h2>;

  const closeEditing = () => setIsEditing(false);
  const openEditing = () => setIsEditing(true);

  return (
    <div className={classes.container}>
      <h1>Welcome back</h1>
      {!isEditing && (
        <>
          <h1>{user.firstName} {user.lastName}!</h1>
          <Button className={classes.edit} onClick={openEditing} >Edit Name</Button>
        </>
      )}
      {isEditing && <Edit closeEdit={closeEditing} user={user} />}
    </div>
  )
}

export default UserInfo;