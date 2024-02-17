import Heading from '@atoms/Heading/Heading';
import Container from '@atoms/Container/Container';
import Accordion from '@molecules/Accordion/Accordion';
import { faqList } from '@/constants/faqList';

import s from './FAQ.module.css';

function FAQ() {
  return (
    <section className={s.root} id="FAQ">
      <Container className={s.wrapper}>
        <Heading className={s.heading}>FAQ</Heading>
        <Accordion items={faqList} />
      </Container>
    </section>
  );
}
export default FAQ;
