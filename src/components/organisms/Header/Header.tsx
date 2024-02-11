import { useState } from 'react';
import Logo from '@atoms/Logo/Logo';
import Cart from '@atoms/Cart/Cart';
import NavBar from '@molecules/NavBar/NavBar';
import Container from '@atoms/Container/Container';
import MobileMenu from '@organisms/MobileMenu/MobileMenu';
import { ReactComponent as BurgerIcon } from '@/icons/burger-menu.svg';

import s from './Header.module.css';

function Header() {
  const [isOpen, sestIsOpen] = useState(false);

  return (
    <header className={s.root}>
      <Container className={s.wrapper}>
        <Logo />
        <div className={s.navbarWrapper}>
          <NavBar className={s.navbar} />
          <Cart total={4} />
          <button
            aria-label="Open nav menu"
            className={s.burgerButton}
            onClick={() => sestIsOpen(true)}>
            <BurgerIcon fill="#fff" className={s.burgerIcon} />
          </button>
        </div>
        <MobileMenu show={isOpen} onClose={() => sestIsOpen(false)} />
      </Container>
    </header>
  );
}

export default Header;
