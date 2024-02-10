import Cite from '@atoms/Cite/Cite';
import Image from '@atoms/Image/Image';
import Heading from '@atoms/Heading/Heading';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';
import Background from '@/images/background_01.jpg';
import { ReactComponent as Decor } from '@/icons/decor_about.svg';

import s from './About.module.css';

function About() {
  return (
    <section className={s.root}>
      <Container className={s.wrapper}>
        <div className={s.textBlock}>
          <Heading white>About us</Heading>
          <Subtitle white className={s.subtitle}>
            {`Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.
            But we will help you make the right choice!`}
          </Subtitle>
          <Cite text="Goods4you" className={s.cite} />
        </div>
        <div className={s.imageWrapper}>
          <Image src={Background} />
        </div>
      </Container>
      <Decor className={s.decor} />
    </section>
  );
}

export default About;
