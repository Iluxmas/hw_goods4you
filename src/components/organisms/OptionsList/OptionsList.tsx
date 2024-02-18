import QuizOption from '@molecules/QuizOption/QuizOption';
import { useGetCategories } from '@/shared/store/api/productsApi';

import s from './OptionsList.module.css';

type Props = {
  selected: string[];
  onToggle: (value: boolean, name: string) => void;
};

function OptionsList({ onToggle }: Props) {
  const { data } = useGetCategories();

  return (
    <div className={s.root}>
      {data?.map((item, idx) => (
        <QuizOption key={idx} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default OptionsList;
