import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
   items: [],
   amount: 0
};

const cartReducer = (state, action) =>
{
   if (action.type === 'ADD')
   {
      return {
         items: state.items.concat(action.item),
         amount: state.amount + action.item.price * action.item.amount
      }
   }

   return defaultCartState;
};

const CartProvider = ({ children }) =>
{
   const [cart, dispatch] = useReducer(cartReducer, defaultCartState);

   const context = {
      items: cart.items,
      total: cart.amount,
      addItem: item => { dispatch({ type: 'ADD', item: item }); },
      removeItem: id => { dispatch({ type: 'REMOVE', id: id }); }
   };

   return (
      <CartContext.Provider value={ context }>
         { children }
      </CartContext.Provider>
   );
};

export default CartProvider;