import { useState } from 'react';
import Title from '@atoms/Title/Title';
import { ReactComponent as Checked } from '@/icons/checked.svg';

import s from './CheckBox.module.css';

type Props = {
  label: string;
  onToggle: (v: boolean) => void;
};

function CheckBox({ onToggle, label }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    onToggle(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <label className={s.root}>
      <span className={s.checkbox}>
        {isChecked && <Checked className={s.icon} />}
      </span>
      <Title text={label} />
      <input
        type="checkbox"
        checked={isChecked}
        className={s.input}
        onChange={handleChange}
      />
    </label>
  );
}

export default CheckBox;
