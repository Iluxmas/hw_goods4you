import { ReactNode } from 'react';
import clsx from 'clsx';

import s from './Container.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return <div className={clsx(s.root, className)}>{children}</div>;
}

export default Container;
