import React from 'react';

import s from './DescriptionItem.module.css';

type Props = {
  title: string;
  text?: string | number;
  children?: React.ReactNode;
};

function DescriptionItem({ title, text, children }: Props) {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      {children ? (
        <p className={s.children}>{children}</p>
      ) : (
        <p className={s.text}>{text}</p>
      )}
    </div>
  );
}

export default DescriptionItem;
