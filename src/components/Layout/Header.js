import css from './Header.module.css';
import bg from '../../assets/meals.jpg';

const Header = () =>
{
   return (
      <>
         <header className={ css.header }>
            <h1>ReactMeals</h1>
            <button>Cart</button>
         </header>
         <div className={ css['main-image'] }>
            <img src={ bg } />
         </div>
      </>
   );
}

export default Header;