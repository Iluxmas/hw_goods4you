import React from 'react';

import s from './DescriptionItem.module.css';

function DescriptionItem({ title, text }: any) {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      <p className={s.text}>{text}</p>
    </div>
  );
}

export default DescriptionItem;
