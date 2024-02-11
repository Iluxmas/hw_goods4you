import React from 'react';
// import { ReactComponent as ExpandIcon } from '@/icons/expand.svg';
import clsx from 'clsx';
import { TFAQItem } from '@/types/faqItem';
import Subtitle from '../Subtitle/Subtitle';

import s from './AccordionItem.module.css';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
} & Pick<TFAQItem, 'question' | 'answer'>;

function AccordionItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <p className={s.question}>{question}</p>
        <button
          onClick={onToggle}
          aria-label="Toggle FAQ answer view"
          className={clsx(s.expandBtn, isOpen && s.open)}></button>
      </div>
      <div className={clsx(s.footer, isOpen && s.open)}>
        <Subtitle className={s.answer}>{answer}</Subtitle>
      </div>
    </div>
  );
}

export default AccordionItem;
