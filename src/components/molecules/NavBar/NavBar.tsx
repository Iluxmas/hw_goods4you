import clsx from 'clsx';
import NavItem from '@atoms/NavItem/NavItem';
import { navbarLinks } from '@/constants/navbarLinks';

import s from './Navbar.module.css';

type Props = {
  dark?: boolean;
  className?: string;
};

function NavBar({ className, dark }: Props) {
  return (
    <nav className={clsx(s.root, className)}>
      {navbarLinks.map((item, idx) => (
        <NavItem
          key={idx}
          href={item.href}
          text={item.text}
          className={clsx(dark && s.navitem)}
        />
      ))}
    </nav>
  );
}

export default NavBar;
