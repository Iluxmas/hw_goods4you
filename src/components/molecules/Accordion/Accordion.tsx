import { useState } from 'react';
import { TFAQItem } from '@/types/faqItem';
import AccordionItem from '@atoms/AccordionItem/AccordionItem';

import s from './Accordion.module.css';

type Props = {
  items: TFAQItem[];
};

function Accordion({ items }: Props) {
  const [current, setCurrent] = useState<number | null>(0);

  const handleToggleItem = (idx: number) => {
    setCurrent(idx === current ? null : idx);
  };

  return (
    <div className={s.root}>
      {items.map((el, idx) => (
        <AccordionItem
          key={el.id}
          answer={el.answer}
          question={el.question}
          isOpen={current === idx}
          onToggle={() => handleToggleItem(idx)}
        />
      ))}
    </div>
  );
}

export default Accordion;
