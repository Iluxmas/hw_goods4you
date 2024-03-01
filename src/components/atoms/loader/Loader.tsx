import React from 'react';
import clsx from 'clsx';
import { ReactComponent as LoaderIcon } from './assets/loader.svg';

import s from './Loader.module.css';

type Props = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

export default function Loader({ className, size = 'small' }: Props) {
  return (
    <div className={clsx(s.root, s[size], className)}>
      <LoaderIcon className={s.loaderIcon} />
    </div>
  );
}
