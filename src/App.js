import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () =>
{
   const [cartIsVisible, setCartIsVisible] = useState(false);

   const showCart = () => { setCartIsVisible(true); };
   const hideCart = () => { setCartIsVisible(false); };

   return (
      <>
         { cartIsVisible && <Cart onClose={ hideCart } /> }
         <Header onShowCart={ showCart } />
         <main>
            <Meals />
         </main>
      </>
   );
}

export default App;
