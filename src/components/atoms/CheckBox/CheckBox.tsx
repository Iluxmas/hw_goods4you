import { useState } from 'react';
import Title from '@atoms/Title/Title';
import { ReactComponent as Checked } from '@/icons/checked.svg';

import s from './CheckBox.module.css';
import clsx from 'clsx';

type Props = {
  label: string;
  isLoading: boolean;
  initialState: boolean;
  onToggle: (v: boolean) => void;
};

function CheckBox({ onToggle, label, isLoading, initialState }: Props) {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return;
    onToggle(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <label className={clsx(s.root, isLoading && s.loading)}>
      <span className={s.checkbox} aria-label={`choose ${label} product`}>
        {isChecked && <Checked className={s.icon} />}
      </span>
      <Title text={label} />
      <input
        data-testid="checkbox-test-id"
        type="checkbox"
        checked={isChecked}
        className={s.input}
        onChange={handleChange}
      />
    </label>
  );
}

export default CheckBox;
