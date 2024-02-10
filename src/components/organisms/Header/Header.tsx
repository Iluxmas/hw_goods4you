import Logo from '@atoms/Logo/Logo';
import NavBar from '@molecules/NavBar/NavBar';
import { headerNavbarConfig } from '@/constants/navbarConfigs';

import s from './Header.module.css';

function Header() {
  return (
    <div className={s.root}>
      <Logo />
      <NavBar config={headerNavbarConfig} />
    </div>
  );
}

export default Header;
