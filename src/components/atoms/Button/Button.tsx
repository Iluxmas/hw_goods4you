import clsx from 'clsx';
import s from './Button.module.css';

type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  intent?: 'primary' | 'secondary' | 'outline' | 'link';
};

function Button({ text, intent = 'primary', className, onClick }: Props) {
  return (
    <button
      type="button"
      className={clsx(s.root, s[intent], className)}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
