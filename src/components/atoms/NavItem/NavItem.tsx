import clsx from 'clsx';
import { Link } from 'react-router-dom';

import s from './NavItem.module.css';

type Props = {
  href: string;
  text: string;
  className?: string;
};

function NavItem({ text, className, href }: Props) {
  return (
    <Link to={href} className={clsx(s.root, className)}>
      <p className={s.text}>{text}</p>
    </Link>
  );
}

export default NavItem;
