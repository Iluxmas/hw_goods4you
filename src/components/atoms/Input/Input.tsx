import React, { ComponentProps } from 'react';
import clsx from 'clsx';
import Textarea from 'react-textarea-autosize';

import s from './Input.module.css';

interface Props extends ComponentProps<'input'> {
  label: string;
  isError: boolean;
  textArea?: boolean;
  disabled?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  value,
  isError,
  onChange,
  disabled,
  textArea = false,
  ...props
}: Props) {
  return (
    <label className={s.label}>
      {label}
      {textArea ? (
        <Textarea
          maxRows={5}
          value={value}
          disabled={disabled}
          className={clsx(s.input, disabled && s.disabled, isError && s.error)}
          onChange={onChange as any}
        />
      ) : (
        <input
          type="text"
          value={value}
          data-testid="input-id"
          disabled={disabled}
          onChange={onChange}
          className={clsx(s.input, disabled && s.disabled, isError && s.error)}
          {...props}
        />
      )}
    </label>
  );
}

export default Input;
