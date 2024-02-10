import React, { ReactNode } from 'react';
import clsx from 'clsx';

import s from './Subtitle.module.css';

type Props = {
  className: string;
  children: ReactNode;
};

function Subtitle({ children, className }: Props) {
  return <p className={clsx(s.root, className)}>{children}</p>;
}

export default Subtitle;
