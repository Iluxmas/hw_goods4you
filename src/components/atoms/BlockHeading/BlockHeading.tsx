import { ReactNode } from 'react';
import clsx from 'clsx';

import s from './BlockHeading.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

function BlockHeading({ children, className }: Props) {
  return <h3 className={clsx(s.root, className)}>{children}</h3>;
}

export default BlockHeading;
