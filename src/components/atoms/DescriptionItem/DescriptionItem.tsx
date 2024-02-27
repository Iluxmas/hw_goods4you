import React from 'react';
import clsx from 'clsx';

import s from './DescriptionItem.module.css';

type Props = {
  title: string;
  editMode?: boolean;
  text?: string | number;
  children?: React.ReactNode;
};

function DescriptionItem({ title, text, children, editMode = false }: Props) {
  return (
    <div className={clsx(s.root, editMode && s.edit)}>
      <p className={s.title}>{title}</p>
      {children ? (
        <p className={s.children}>{children}</p>
      ) : (
        <p className={clsx(s.text, editMode && s.edit)}>{text}</p>
      )}
    </div>
  );
}

export default DescriptionItem;
