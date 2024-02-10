import React from 'react';
import clsx from 'clsx';

import s from './Title.module.css';

type Props = {
  text: string;
  className?: string;
};

function Title({ className, text }: Props) {
  return <p className={clsx(s.title, className)}>{text}</p>;
}

export default Title;
