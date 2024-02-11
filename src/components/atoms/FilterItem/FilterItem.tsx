import Title from '@atoms/Title/Title';

import s from './FilterItem.module.css';
import { useState } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  onToggle: (v: boolean) => void;
};

function FilterItem({ text, onToggle }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    console.log(e);
    onToggle(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <label
      className={clsx(s.root, isChecked && s.checked)}
      aria-label={`add ${text} category to listed catalog`}>
      <input
        type="checkbox"
        checked={isChecked}
        className={s.input}
        onChange={handleChange}
      />
      <Title text={text} />
    </label>
  );
}

export default FilterItem;
