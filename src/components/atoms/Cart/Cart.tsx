import { ReactComponent as CartIcon } from '@/icons/basket.svg';
import NavItem from '../NavItem/NavItem';

import s from './Cart.module.css';

type Props = {
  total: number;
};

function Cart({ total }: Props) {
  return (
    <div className={s.root}>
      <NavItem text="Cart" href="/" />
      <CartIcon />
      {total && <span className={s.badge}>{total}</span>}
    </div>
  );
}

export default Cart;
