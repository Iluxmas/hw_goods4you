import React, { ReactNode } from 'react';
import clsx from 'clsx';

import s from './Heading.module.css';

type Props = {
  white?: boolean;
  className?: string;
  children: ReactNode;
};

function Heading({ children, className, white }: Props) {
  return (
    <h2 className={clsx(s.root, white && s.white, className)}>{children}</h2>
  );
}

export default Heading;
