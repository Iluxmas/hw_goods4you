import FilterItem from '@atoms/FilterItem/FilterItem';

import s from './FilterList.module.css';
import { useState } from 'react';

const filters = [
  { name: 'smartphones', id: 420 },
  { name: 'laptops', id: 421 },
  { name: 'sneakers', id: 422 },
  { name: 'sneakers', id: 423 },
  { name: 'sneakers', id: 424 },
  { name: 'sneakers', id: 425 },
  { name: 'sneakers', id: 426 },
  { name: 'sneakers', id: 427 },
];

function FilterList() {
  const [selected, setSelected] = useState<number[]>([]);

  const handleToggle = (value: boolean, id: number) => {
    if (!value) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected(selected.concat(id));
    }
  };

  return (
    <div className={s.root}>
      {filters.map((item) => (
        <FilterItem
          key={item.id}
          text={item.name}
          onToggle={(value: boolean) => handleToggle(value, item.id)}
        />
      ))}
    </div>
  );
}

export default FilterList;
