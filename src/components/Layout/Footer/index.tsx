import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.text}>Copyright 2020 Argent Bank</p>
    </footer>
  )
}

export default Footer;