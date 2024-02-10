import clsx from 'clsx';
import s from './Button.module.css';

type Props = {
  text: string;
  intent?: 'primary' | 'secondary' | 'outline' | 'link';
};

function Button({ text, intent = 'primary' }: Props) {
  return <button className={clsx(s.root, s[intent])}>{text}</button>;
}

export default Button;
