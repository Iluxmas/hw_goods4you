import clsx from 'clsx';
import { Link } from 'react-router-dom';

import s from './NavItem.module.css';

type Props = {
  href: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
};

function NavItem({ text, className, href, children }: Props) {
  return (
    <Link
      to={href}
      className={clsx(s.root, className)}
      aria-label={`navigate to ${text}`}>
      <p className={s.text}>{text}</p>
      {!!children && children}
    </Link>
  );
}

export default NavItem;
