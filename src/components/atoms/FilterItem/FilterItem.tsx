import Title from '@atoms/Title/Title';

import s from './FilterItem.module.css';

type Props = {
  text: string;
};

function FilterItem({ text }: Props) {
  return (
    <div className={s.root}>
      <Title text={text} />
    </div>
  );
}

export default FilterItem;
