import CartIcon from '../Cart/CartIcon';
import css from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) =>
{
   return (
      <button className={ css.button } onClick={ onClick }>
         <span className={ css.icon }>
            <CartIcon />
         </span>
         <span>Your cart</span>
         <span className={ css.badge }>
            0
         </span>
      </button>
   );
};

export default HeaderCartButton;