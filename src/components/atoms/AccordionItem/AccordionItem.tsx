import React from 'react';
import { ReactComponent as ExpandIcon } from '@/icons/expand.svg';
import { TFAQItem } from '@/types/faqItem';

import s from './AccordionItem.module.css';
import Subtitle from '../Subtitle/Subtitle';
import clsx from 'clsx';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
} & Pick<TFAQItem, 'question' | 'answer'>;

function AccordionItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <p className={s.question}>{question}</p>
        <ExpandIcon
          onClick={onToggle}
          className={clsx(s.expand, isOpen && s.iconOpen)}
        />
      </div>
      <div className={clsx(s.footer, isOpen && s.open)}>
        <Subtitle className={s.answer}>{answer}</Subtitle>
      </div>
    </div>
  );
}

export default AccordionItem;
