import CartIcon from '../Cart/CartIcon';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = () =>
{
   return (
      <button className={ css.button }>
         <span className={ css.icon }>
            <CartIcon />
         </span>
         <span>Your cart</span>
         <span class={ css.badge }>
            0
         </span>
      </button>
   );
};

export default HeaderCartButton;