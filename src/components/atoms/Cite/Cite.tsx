import React from 'react';
import clsx from 'clsx';

import s from './Cite.module.css';

type Props = {
  text: string;
  className?: string;
};

function Cite({ text, className }: Props) {
  return <p className={clsx(s.root, className)}>{text}</p>;
}

export default Cite;
