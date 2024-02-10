import NavItem from '@atoms/NavItem/NavItem';

import s from './Navbar.module.css';

type Props = {
  config: { href: string; text: string }[];
};

function NavBar({ config }: Props) {
  return (
    <nav className={s.root}>
      {config.map((item, idx) => (
        <NavItem key={idx} href={item.href} text={item.text} />
      ))}
    </nav>
  );
}

export default NavBar;
