import clsx from 'clsx';
import CheckBox from '@atoms/CheckBox/CheckBox';
import { useGetCategories } from '@/shared/store/api/productsApi';

import s from './OptionsList.module.css';

type Props = {
  isLoading: boolean;
  selected: string[];
  onToggle: (value: boolean, name: string) => void;
};

function OptionsList({ onToggle, isLoading, selected }: Props) {
  const { data } = useGetCategories();

  return (
    <div className={s.root}>
      {data?.map((item, idx) => (
        <div key={idx} className={clsx(s.wrapper, isLoading && s.loading)}>
          <CheckBox
            label={item}
            isLoading={isLoading}
            initialState={selected.includes(item)}
            onToggle={(value: boolean) => onToggle(value, item)}
          />
        </div>
      ))}
    </div>
  );
}

export default OptionsList;
