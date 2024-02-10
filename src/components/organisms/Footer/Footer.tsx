import Logo from '@atoms/Logo/Logo';
import NavBar from '@molecules/NavBar/NavBar';
import Container from '@atoms/Container/Container';
import { footerNavbarLinks } from '@/constants/navbarLinks';

import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.root}>
      <Container className={s.wrapper}>
        <Logo />
        <NavBar config={footerNavbarLinks} />
      </Container>
    </footer>
  );
}

export default Footer;
