import { useState } from 'react';
import clsx from 'clsx';
import Logo from '@atoms/Logo/Logo';
import NavBar from '@molecules/NavBar/NavBar';
import { Link, useLocation } from 'react-router-dom';
import Container from '@atoms/Container/Container';
import MobileMenu from '@organisms/MobileMenu/MobileMenu';
import { ReactComponent as BurgerIcon } from '@/icons/burger-menu.svg';

import s from './Header.module.css';

function Header() {
  const { pathname } = useLocation();
  const [isOpen, sestIsOpen] = useState(false);

  const isHomePage = pathname === '/';

  return (
    <header className={clsx(s.root, isHomePage && s.home)}>
      <Container className={s.wrapper}>
        <Logo />
        <div className={s.navbarWrapper}>
          {isHomePage && <NavBar className={s.navbar} />}
          <Link to="/products" className={s.link}>
            For staff
          </Link>
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
