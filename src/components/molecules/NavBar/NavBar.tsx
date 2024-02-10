import NavItem from '@atoms/NavItem/NavItem';

import s from './Navbar.module.css';

type Props = {
  config: { href: string; text: string }[];
};

function NavBar({ config }: Props) {
  return (
    <div className={s.root}>
      {config.map((item) => (
        <NavItem href={item.href} text={item.text} />
      ))}
    </div>
  );
}

export default NavBar;
