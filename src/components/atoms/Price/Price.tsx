import React from 'react';

import s from './Price.module.css';

function Price({ value }: { value: number }) {
  return <p className={s.price}>{value} $</p>;
}

export default Price;
