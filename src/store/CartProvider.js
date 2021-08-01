import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
   items: [],
   amount: 0
};

const cartReducer = (state, action) => {
   if (action.type === 'ADD') {
      const amount = state.amount + action.item.price * action.item.amount

      const index = state.items.findIndex(item => item.id === action.item.id);
      const existingItem = state.items[index];

      let items;

      if (existingItem) {
         const item = { ...existingItem, amount: existingItem.amount + action.item.amount };

         items = [...state.items];
         items[index] = item;
      } else {
         items = state.items.concat(action.item);
      }

      return {
         items: items,
         amount: amount
      };
   }

   return defaultCartState;
};

const CartProvider = ({ children }) => {
   const [cart, dispatch] = useReducer(cartReducer, defaultCartState);

   const context = {
      items: cart.items,
      total: cart.amount,
      addItem: item => { dispatch({ type: 'ADD', item: item }); },
      removeItem: id => { dispatch({ type: 'REMOVE', id: id }); }
   };

   return (
      <CartContext.Provider value={context}>
         {children}
      </CartContext.Provider>
   );
};

export default CartProvider;