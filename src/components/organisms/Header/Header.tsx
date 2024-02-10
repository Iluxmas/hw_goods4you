import Logo from '@atoms/Logo/Logo';
import NavBar from '@molecules/NavBar/NavBar';
import { headerNavbarLinks } from '@/constants/navbarLinks';
import Container from '@/components/atoms/Container/Container';

import s from './Header.module.css';

function Header() {
  return (
    <header className={s.root}>
      <Container className={s.wrapper}>
        <Logo />
        <NavBar config={headerNavbarLinks} />
      </Container>
    </header>
  );
}

export default Header;
