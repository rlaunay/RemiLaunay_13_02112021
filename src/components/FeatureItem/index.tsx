import classes from './FeatureItem.module.scss';

type FeatureItemProps = {
  title: string;
  alt: string;
  src: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ children, title, alt, src }) => {
  return (
    <div className={classes.item}>
      <img src={src} alt={alt} className={classes.icon} />
      <h3 className={classes.title}>{title}</h3>
      <p>
        {children}
      </p>
    </div>
  )
}

export default FeatureItem;