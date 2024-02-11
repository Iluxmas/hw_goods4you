import React from 'react';
import clsx from 'clsx';
import { ReactComponent as CloseIcon } from '@/icons/expand.svg';
import NavBar from '@molecules/NavBar/NavBar';

import s from './MobileMenu.module.css';

type Props = {
  show: boolean;
  onClose: () => void;
};

function MobileMenu({ show, onClose }: Props) {
  return (
    <div className={clsx(s.root, show && s.show)}>
      <button onClick={onClose} aria-label="Close" className={s.button}>
        <CloseIcon className={s.closeIcon} />
      </button>
      <NavBar dark className={s.navbar} />
    </div>
  );
}

export default MobileMenu;
