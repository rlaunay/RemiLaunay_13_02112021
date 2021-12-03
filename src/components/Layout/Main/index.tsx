import classes from './Main.module.scss';

type MainProps = {
  bg?: 'dark'
}

const Main: React.FC<MainProps> = ({ children, bg }) => {
  let className = classes.main
  if (bg === 'dark') {
    className += ` ${classes.dark}`
  }
  return (
    <main className={className}>{children}</main>
  )
}

export default Main;