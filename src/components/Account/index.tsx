import Button from '../UI/Button';
import classes from './Account.module.scss';

type AccountProps = {
  title: string;
  amount: number;
  description: string;

}

const Account: React.FC<AccountProps> = ({ title, amount, description }) => {
  const formatted = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD'
  }).format(amount)
  return (
    <section className={classes.account}>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.amount}>{formatted}</p>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={`${classes.content} ${classes.cta}`}>
        <Button className={classes.transactionBtn}>View transactions</Button>
      </div>
    </section>
  )
}

export default Account;