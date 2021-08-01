import { useContext } from 'react';
import CartContext from '../../store/CartContext';

import Modal from '../UI/Modal';

import CartItem from './CartItem';
import css from './Cart.module.css';

const Cart = ({ onClose }) => {
   const ctx = useContext(CartContext);

   const amount = `$${ctx.total.toFixed(2)}`;
   const hasItems = ctx.items.length > 0;

   const removeItem = id => {

   };

   const addItem = item => {

   };

   const items = (
      <ul className={css['cart-items']}>
         {
            ctx.items.map(item =>
               <CartItem 
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onRemove={removeItem}
                  onAdd={addItem} />)
         }
      </ul>
   );

   return (
      <Modal onClose={onClose}>
         {items}
         <div className={css.total}>
            <span>Total amount</span>
            <span>{amount}</span>
         </div>
         <div className={css.actions}>
            <button className={css['button--alt']} onClick={onClose}>Close</button>
            {hasItems && <button className={css.button}>Order</button>}
         </div>
      </Modal>
   );
};

export default Cart;