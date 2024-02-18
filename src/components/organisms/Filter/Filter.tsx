import { useState } from 'react';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import FilterItem from '@atoms/FilterItem/FilterItem';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import { useGetCategories } from '@/shared/store/api/productsApi';

import s from './Filter.module.css';

type Props = {
  onReset: () => void;
  onSubmit: (v: string) => void;
};

function Filter({ onSubmit, onReset }: Props) {
  const [selected, setSelected] = useState<string>('');

  const { data } = useGetCategories();

  const handleToggle = (value: boolean, item: string) => {
    if (value) {
      setSelected(item);
    } else {
      setSelected('');
    }
  };

  return (
    <div className={s.root}>
      <BlockHeading className={s.heading}>
        Selection by{'\u00A0'}parameters
      </BlockHeading>
      <Title text="Category" className={s.title} />
      <div className={s.filter}>
        {data?.map((item, idx) => (
          <FilterItem
            key={idx}
            text={item}
            isChecked={item === selected}
            onSelect={(value: boolean) => handleToggle(value, item)}
          />
        ))}
      </div>
      <div className={s.buttonsContainer}>
        <Button
          text="Apply"
          intent="secondary"
          disabled={!selected}
          className={s.button}
          onClick={() => onSubmit(selected)}
        />
        <Button
          text="Reset"
          intent="link"
          onClick={() => {
            onSubmit('');
            if (selected) onReset();
            setSelected('');
          }}
        />
      </div>
    </div>
  );
}

export default Filter;
