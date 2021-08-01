import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';

import CartIcon from '../Cart/CartIcon';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) =>
{
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const ctx = useContext(CartContext);

   const numberOfItems = ctx.items.reduce(
      (current, item) => current + item.amount, 0);

   const btnCss = `${ css.button } ${ btnIsHighlighted ? css.bump : '' }`;

   useEffect(() => {
      if (ctx.items.length > 0)
         setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => { clearTimeout(timer); };
   }, [ctx.items]);

   return (
      <button className={ btnCss } onClick={ onClick }>
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