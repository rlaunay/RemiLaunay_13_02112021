import SrOnly from '../UI/SrOnly';
import classes from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={classes.hero}>
      <section className={classes.content}>
        <SrOnly type="h2">Promoted Content</SrOnly>
        <p className={classes.subtitle}>No fees.</p>
        <p className={classes.subtitle}>No minimum deposit.</p>
        <p className={classes.subtitle}>High interest rates.</p>
        <p className={classes.text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

export default Hero;