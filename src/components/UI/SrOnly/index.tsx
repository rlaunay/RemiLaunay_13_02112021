import classes from './SrOnly.module.scss';

type SrOnly = {
  type?: 'h1' | 'h2'
}

const SrOnly: React.FC<SrOnly> = ({ type, children }) => {
  if (type === 'h2') {
    return <h2 className={classes.srOnly}>{children}</h2>
  } else {
    return <h1 className={classes.srOnly}>{children}</h1>
  }
}

export default SrOnly;