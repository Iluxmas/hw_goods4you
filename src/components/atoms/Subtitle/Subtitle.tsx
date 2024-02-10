import React, { ReactNode } from 'react';
import clsx from 'clsx';

import s from './Subtitle.module.css';

type Props = {
  white?: boolean;
  className?: string;
  children: ReactNode;
};

function Subtitle({ children, className, white }: Props) {
  return (
    <p className={clsx(s.root, white && s.white, className)}>{children}</p>
  );
}

export default Subtitle;
