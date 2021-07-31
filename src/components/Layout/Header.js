import css from './Header.module.css';
import bg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) =>
{
   return (
      <>
         <header className={ css.header }>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={ onShowCart } />
         </header>
         <div className={ css['main-image'] }>
            <img alt='background' src={ bg } />
         </div>
      </>
   );
}

export default Header;