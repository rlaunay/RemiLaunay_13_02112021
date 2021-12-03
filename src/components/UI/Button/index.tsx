import classes from './Button.module.scss';

type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', type = 'button', disabled, onClick }) => {
  return (
    <button 
      disabled={disabled} 
      type={type} 
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button;