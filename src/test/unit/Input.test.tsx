import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { it, expect } from '@jest/globals';
import Input from '../../components/atoms/Input/Input';

describe('\n🟢 Input should work', () => {
  it('Should render correct label and value', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Input
        label="Test label"
        value="Test value"
        isError={false}
        onChange={onChangeMock}
      />
    );

    expect(getByLabelText('Test label')).toBeInTheDocument();
    expect(getByLabelText('Test label')).toHaveValue('Test value');
  });

  it('Should calls onChange function with the correct value when input changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Input
        value=""
        label="Test label"
        isError={false}
        onChange={onChangeMock}
      />
    );

    const newValue = {
      target: { value: 'New value' },
    };

    fireEvent.change(getByTestId('input-id'), newValue);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('Should render correctly with isError set to true', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <Input
        label="Test label"
        value="Test value"
        isError={true}
        onChange={onChangeMock}
      />
    );

    expect(getByLabelText('Test label')).toBeInTheDocument();
    expect(getByTestId('input-id')).toBeInTheDocument();
  });

  it('Renders correctly with disabled set to true', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Input
        label="Test label"
        value="Test value"
        isError={false}
        onChange={onChangeMock}
        disabled={true}
      />
    );

    expect(getByTestId('input-id')).toBeDisabled();
  });
});
