import clsx from 'clsx';
import Loader from '@atoms/loader/Loader';

import s from './Button.module.css';

type Props = {
  text: string;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  intent?: 'primary' | 'secondary' | 'outline' | 'link';
};

function Button({
  text,
  onClick,
  disabled,
  className,
  isLoading,
  intent = 'primary',
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={clsx(
        s.root,
        s[intent],
        className,
        disabled && s.disabled,
        isLoading && s.loading
      )}
      onClick={onClick}>
      {isLoading ? <Loader size={18} color="#b2b5bb" /> : text}
    </button>
  );
}

export default Button;
