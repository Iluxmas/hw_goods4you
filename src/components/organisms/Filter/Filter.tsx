import React from 'react';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import FilterList from '@molecules/FilterList/FilterList';

import s from './Filter.module.css';

function Filter() {
  return (
    <div className={s.root}>
      <BlockHeading className={s.heading}>
        Selection by{'\u00A0'}parameters
      </BlockHeading>
      <Title text="Category" className={s.title} />
      <FilterList />
      <div className={s.buttonsContainer}>
        <Button text="Apply" intent="secondary" className={s.button} />
        <Button text="Reset" intent="link" />
      </div>
    </div>
  );
}

export default Filter;
