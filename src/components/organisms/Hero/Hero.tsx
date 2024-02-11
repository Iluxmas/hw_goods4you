import Button from '@atoms/Button/Button';
import LeadText from '@atoms/LeadText/LeadText';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';

import s from './Hero.module.css';

function Hero() {
  return (
    <section className={s.root}>
      <Container className={s.wrapper}>
        <div className={s.contentWrapper}>
          <LeadText />
          <Subtitle white className={s.subtitle}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </Subtitle>
          <Button
            text="Go to shopping"
            aria-label="Go to shopping"
            className={s.button}
          />
        </div>
      </Container>
      <p className={s.backgroundText}>Goods4you</p>
    </section>
  );
}

export default Hero;
