import { useContext } from 'react';
import CartContext from '../../store/CartContext';

import CartIcon from '../Cart/CartIcon';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) =>
{
   const context = useContext(CartContext);

   const numberOfItems = context.items.reduce(
      (current, item) => current + item.amount, 0);

   return (
      <button className={ css.button } onClick={ onClick }>
         <span className={ css.icon }>
            <CartIcon />
         </span>
         <span>Your cart</span>
         <span className={ css.badge }>
            { numberOfItems }
         </span>
      </button>
   );
};

export default HeaderCartButton;