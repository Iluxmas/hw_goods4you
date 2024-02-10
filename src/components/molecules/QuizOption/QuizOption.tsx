import Image from '@atoms/Image/Image';
import CheckBox from '@atoms/CheckBox/CheckBox';
import { TQuizOption } from '@/types/quizOption';

import s from './QuizOption.module.css';

type Props = {
  item: TQuizOption;
  onToggle: (value: boolean, id: number) => void;
};

function QuizOption({ item, onToggle }: Props) {
  return (
    <div className={s.root}>
      <Image src={item.photo} />
      <CheckBox
        label={item.name}
        onToggle={(value: boolean) => onToggle(value, item.id)}
      />
    </div>
  );
}

export default QuizOption;
