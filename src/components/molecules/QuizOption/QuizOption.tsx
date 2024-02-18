import CheckBox from '@atoms/CheckBox/CheckBox';

import s from './QuizOption.module.css';

type Props = {
  item: string;
  onToggle: (value: boolean, name: string) => void;
};

function QuizOption({ item, onToggle }: Props) {
  return (
    <div className={s.root}>
      <CheckBox
        label={item}
        onToggle={(value: boolean) => onToggle(value, item)}
      />
    </div>
  );
}

export default QuizOption;
