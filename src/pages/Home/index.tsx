import FeatureItem from "../../components/FeatureItem";
import Hero from "../../components/Hero";
import Main from "../../components/Layout/Main"
import SrOnly from "../../components/UI/SrOnly";

import iconChat from './../../assets/icon-chat.png';
import iconMoney from './../../assets/icon-money.png';
import iconSecu from './../../assets/icon-security.png';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <Main>
      <Hero />
      <section className={classes.features}>
        <SrOnly type="h2">Features</SrOnly>
        <FeatureItem title="You are our #1 priority" src={iconChat} alt="Chat Icon">
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </FeatureItem>
        <FeatureItem title="More savings means higher rates" src={iconMoney} alt="Money Icon">
          The more you save with us, the higher your interest rate will be!
        </FeatureItem>
        <FeatureItem title="Security you can trust" src={iconSecu} alt="Security Icon">
            We use top of the line encryption to make sure your data and money
            is always safe.
        </FeatureItem>
      </section>
    </Main>
  )
}

export default Home;