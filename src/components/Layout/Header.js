import css from './Header.module.css';
import bg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () =>
{
   return (
      <>
         <header className={ css.header }>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
         </header>
         <div className={ css['main-image'] }>
            <img src={ bg } />
         </div>
      </>
   );
}

export default Header;