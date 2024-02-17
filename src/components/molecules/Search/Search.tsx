import { useEffect, useState } from 'react';
import Button from '@atoms/Button/Button';
import SearchInput from '@atoms/SearchInput/SearchInput';
import { useDebounce } from '@/shared/hooks/useDebounce';

import s from './Search.module.css';

type Props = {
  isLoading: boolean;
  onQueryChange: (val: string) => void;
};

function Search({ onQueryChange, isLoading }: Props) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    onQueryChange(debouncedQuery);
  }, [debouncedQuery]);

  const handleKeyDown = (e: any) => {
    if (e.key == 'Enter') {
      onQueryChange(e.target.value);
    }
  };

  return (
    <div className={s.root}>
      <SearchInput
        value={query}
        onKeyDown={handleKeyDown}
        onInputChange={(e) => setQuery(e.target.value)}
      />
      <Button
        text="search"
        isLoading={isLoading}
        onClick={() => onQueryChange(query)}
      />
    </div>
  );
}

export default Search;
