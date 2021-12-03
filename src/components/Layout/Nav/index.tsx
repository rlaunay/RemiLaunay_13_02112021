import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { authActions } from '../../../store/auth';
import argentBankLogo from './../../../assets/argentBankLogo.png';

import classes from './Nav.module.scss';

type NavLinkClasses = (props: { isActive: boolean }) => string

const Nav: React.FC = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const linkClasses: NavLinkClasses = ({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item;

  const logoutHandler = () => dispatch(authActions.logout())

  return (
    <nav className={classes.nav}>
      <NavLink className={classes.logo} to="/">
        <img
          className={classes.image}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {user && (
          <NavLink className={linkClasses} to="/user">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
        )}
        {!user && <NavLink className={linkClasses} to="/sign-in">
          <i className="fa fa-sign-out"></i>
          Sign In
        </NavLink>}
        {user && <button className={classes.logout} onClick={logoutHandler} >
          <i className="fa fa-sign-out"></i>
          Logout
        </button>}
      </div>
    </nav>
  )
}

export default Nav;
/**
 * GET /transactions?user={id} -> toutes les transacs
 * POST /transactions -> creation transac
 * GET /transactions/{id} -> une transac
 * PUT /transactions/{id} -> modifications transac
 * DELETE /transactions/{id} -> remove transac
 */