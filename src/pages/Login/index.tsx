import Main from "../../components/Layout/Main";
import LoginForm from "../../components/LoginForm";

import classes from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <Main bg="dark">
      <section className={classes.container}>
        <i className={`fa fa-user-circle ${classes.icon}`}></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </Main>
  )
}

export default Login;