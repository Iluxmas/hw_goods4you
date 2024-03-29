// import { ReactComponent as CartIcon } from '@/icons/basket.svg';
import clsx from 'clsx';
import NavItem from '../NavItem/NavItem';

import s from './Cart.module.css';

type Props = {
  total: number;
};

function Cart({ total }: Props) {
  return (
    <div className={s.root}>
      <NavItem text="Cart" href="/" className={s.cartItem}>
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.6843 5.35096H17.2404L13.6223 0.25971C13.4428 0.00680431 13.0535 -0.0757683 12.7527 0.0762992C12.4525 0.228367 12.3553 0.557036 12.5355 0.810482L15.7622 5.35096H5.32521L8.55195 0.810446C8.73206 0.557 8.6349 0.228331 8.33471 0.0762632C8.03328 -0.0758043 7.64523 0.0067683 7.46512 0.259674L3.84701 5.35093H0.403076V6.42113H1.77866L3.38881 13.6726C3.55714 14.4319 4.34318 14.9827 5.25801 14.9827H15.8294C16.7442 14.9827 17.5302 14.4319 17.698 13.6732L19.3087 6.42113H20.6843C20.6843 6.42113 20.6843 5.35096 20.6843 5.35096ZM16.452 13.4762C16.3963 13.7291 16.1345 13.9125 15.8294 13.9125H5.25801C4.95287 13.9125 4.69108 13.7291 4.63476 13.4757L3.06792 6.42113H18.0195L16.452 13.4762Z"
            fill="white"
          />
        </svg>
        {!!total && (
          <span className={clsx(s.badge, total > 9 && s.double)}>{total}</span>
        )}
      </NavItem>
    </div>
  );
}

export default Cart;
