import React from 'react';

import s from './SearchInput.module.css';

type Props = {
  value: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ onInputChange, onKeyDown, value }: Props) {
  return (
    <input
      type="text"
      value={value}
      className={s.input}
      onKeyDown={onKeyDown}
      onInput={onInputChange}
      placeholder="Search by title"
    />
  );
}

export default SearchInput;
