import '@testing-library/jest-dom';
import { it, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import FilterItem from '../../components/atoms/FilterItem/FilterItem';

describe('\n🟣 Filter element should work', function () {
  it('Should render correct text and unchecked state', () => {
    const onSelectMock = jest.fn();
    const { getByText, getByTestId } = render(
      <FilterItem text="Test text" onSelect={onSelectMock} isChecked={false} />
    );

    expect(getByText('Test text')).toBeInTheDocument();
    expect(getByTestId('filter-checkbox-id')).not.toHaveClass('checked');
  });

  it('Should render correct text and checked state', () => {
    const onSelectMock = jest.fn();
    const { getByText, getByTestId } = render(
      <FilterItem text="Test Text" onSelect={onSelectMock} isChecked={true} />
    );

    expect(getByText('Test Text')).toBeInTheDocument();
    expect(getByTestId('filter-checkbox-id')).toHaveClass('checked');
  });

  it('Should call onSelect function with true when checkbox is checked', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <FilterItem text="Test Text" onSelect={onSelectMock} isChecked={false} />
    );

    fireEvent.click(
      getByTestId('filter-checkbox-id').querySelector('input') as HTMLElement
    );

    expect(onSelectMock).toHaveBeenCalledWith(true);
  });

  it('Calls onSelect function with false when checkbox is unchecked', () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = render(
      <FilterItem text="Test Text" onSelect={onSelectMock} isChecked={true} />
    );

    fireEvent.click(
      getByTestId('filter-checkbox-id').querySelector('input') as HTMLElement
    );

    expect(onSelectMock).toHaveBeenCalledWith(false);
  });
});
