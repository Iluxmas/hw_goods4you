import Button from '@atoms/Button/Button';
import Header from '@organisms/Header/Header';
import LeadText from '@atoms/LeadText/LeadText';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';

import s from './Hero.module.css';

function Hero() {
  return (
    <div className={s.root}>
      <Container className={s.wrapper}>
        <Header />
        <div className={s.contentWrapper}>
          <LeadText />
          <Subtitle className={s.subtitle}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </Subtitle>
          <Button text="Go to shopping" className={s.button} />
        </div>
      </Container>
      <p className={s.backgroundText}>Goods4you</p>
    </div>
  );
}

export default Hero;
