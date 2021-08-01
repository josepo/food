import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () =>
{
   const [cartIsVisible, setCartIsVisible] = useState(false);

   const showCart = () => { setCartIsVisible(true); };
   const hideCart = () => { setCartIsVisible(false); };

   return (
      <CartProvider>
         { cartIsVisible && <Cart onClose={ hideCart } /> }
         <Header onShowCart={ showCart } />
         <main>
            <Meals />
         </main>
      </CartProvider>
   );
}

export default App;
