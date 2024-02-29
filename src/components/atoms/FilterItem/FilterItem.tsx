import clsx from 'clsx';
import Title from '@atoms/Title/Title';

import s from './FilterItem.module.css';

type Props = {
  text: string;
  isChecked: boolean;
  onSelect: (v: boolean) => void;
};

function FilterItem({ text, onSelect, isChecked }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.checked);
  };

  return (
    <label
      data-testid="filter-checkbox-id"
      className={clsx(s.root, isChecked && s.checked)}
      aria-label={`add ${text} category to listed catalog`}>
      <input
        type="checkbox"
        checked={isChecked}
        className={s.input}
        onChange={handleChange}
      />
      <Title text={text} className={s.text} />
    </label>
  );
}

export default FilterItem;
