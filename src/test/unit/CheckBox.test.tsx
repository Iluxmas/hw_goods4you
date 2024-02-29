import '@testing-library/jest-dom';
import { it, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from '../../components/atoms/CheckBox/CheckBox';

jest.mock('@/icons/checked.svg', () => ({
  ReactComponent: 'svg',
}));

describe('🟠 CheckBox should work', () => {
  it('Should render correctly with label and false initialState', () => {
    const onToggleMock = jest.fn();
    const { getByText, getByTestId } = render(
      <CheckBox
        label="Test label"
        isLoading={false}
        initialState={false}
        onToggle={onToggleMock}
      />
    );

    expect(getByText('Test label')).toBeInTheDocument();
    expect(getByTestId('checkbox-test-id')).not.toBeChecked();
  });

  it('Should renders correctly with label and true initialState', () => {
    const onToggleMock = jest.fn();
    const { getByText, getByTestId } = render(
      <CheckBox
        label="Test label"
        isLoading={false}
        initialState={true}
        onToggle={onToggleMock}
      />
    );

    expect(getByText('Test label')).toBeInTheDocument();
    expect(getByTestId('checkbox-test-id')).toBeChecked();
  });

  it('Should not call onToggle function when isLoading is true', () => {
    const onToggleMock = jest.fn();
    const { getByLabelText } = render(
      <CheckBox
        label="Test label"
        isLoading={true}
        initialState={false}
        onToggle={onToggleMock}
      />
    );

    fireEvent.click(getByLabelText('Test label'));

    expect(onToggleMock).not.toHaveBeenCalled();
  });

  it('Should call onToggle function with true when checkbox is checked', () => {
    const onToggleMock = jest.fn();
    const { getByLabelText } = render(
      <CheckBox
        label="Test label"
        isLoading={false}
        initialState={false}
        onToggle={onToggleMock}
      />
    );

    fireEvent.click(getByLabelText('Test label'));

    expect(onToggleMock).toHaveBeenCalledWith(true);
  });

  it('Should call onToggle function with false when checkbox is unchecked', () => {
    const onToggleMock = jest.fn();
    const { getByLabelText } = render(
      <CheckBox
        label="Test label"
        isLoading={false}
        initialState={true}
        onToggle={onToggleMock}
      />
    );

    fireEvent.click(getByLabelText('choose Test label product'));

    expect(onToggleMock).toHaveBeenCalledWith(false);
  });
});
