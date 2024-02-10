import clsx from 'clsx';
import s from './Button.module.css';

type Props = {
  text: string;
  className?: string;
  intent?: 'primary' | 'secondary' | 'outline' | 'link';
};

function Button({ text, intent = 'primary', className }: Props) {
  return <button className={clsx(s.root, s[intent], className)}>{text}</button>;
}

export default Button;
