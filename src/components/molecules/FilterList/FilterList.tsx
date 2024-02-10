import FilterItem from '@atoms/FilterItem/FilterItem';

import s from './FilterList.module.css';

const filters = [
  'smartphones',
  'laptops',
  'sneakers',
  'sneakers',
  'sneakers',
  'sneakers',
  'sneakers',
  'sneakers',
];

function FilterList() {
  return (
    <div className={s.root}>
      {filters.map((el, idx) => (
        <FilterItem key={idx} text={el} />
      ))}
    </div>
  );
}

export default FilterList;
