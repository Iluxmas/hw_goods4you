import clsx from 'clsx';
import s from './Button.module.css';

type Props = {
  text: string;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  intent?: 'primary' | 'secondary' | 'outline' | 'link';
};

function Button({
  text,
  onClick,
  className,
  isLoading,
  intent = 'primary',
}: Props) {
  return (
    <button
      type="button"
      disabled={isLoading}
      className={clsx(s.root, s[intent], className, isLoading && s.loading)}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
