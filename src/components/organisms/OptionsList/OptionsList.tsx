import QuizOption from '@molecules/QuizOption/QuizOption';
import { TQuizOption } from '@/types/quizOption';

import s from './OptionsList.module.css';

type Props = {
  selected: number[];
  list: TQuizOption[];
  onToggle: (value: boolean, id: number) => void;
};

function OptionsList({ list, onToggle }: Props) {
  return (
    <div className={s.root}>
      {list.map((item) => (
        <QuizOption key={item.id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default OptionsList;
