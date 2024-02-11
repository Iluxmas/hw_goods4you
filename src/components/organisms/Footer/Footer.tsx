import Logo from '@atoms/Logo/Logo';
import NavBar from '@molecules/NavBar/NavBar';
import Container from '@atoms/Container/Container';

import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.root}>
      <Container className={s.wrapper}>
        <Logo />
        <NavBar className={s.navbar} />
      </Container>
    </footer>
  );
}

export default Footer;
