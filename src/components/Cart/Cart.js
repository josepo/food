import { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';

import Modal from '../UI/Modal';

import CartItem from './CartItem';
import css from './Cart.module.css';
import Checkout from './Checkout';

const Cart = ({ onClose }) => {
   const ctx = useContext(CartContext);
   const [checkingOut, setCheckingOut] = useState(false);

   const amount = `$${ctx.total.toFixed(2)}`;
   const hasItems = ctx.items.length > 0;

   const removeItem = id => { ctx.removeItem(id); };
   const addItem = item => { ctx.addItem({ ...item, amount: 1 }) };

   const items = (
      <ul className={css['cart-items']}>
         {
            ctx.items.map(item =>
               <CartItem 
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onRemove={removeItem.bind(null, item.id)}
                  onAdd={addItem.bind(null, item)} />)
         }
      </ul>
   );

   const actions =
      <div className={css.actions}>
         <button className={css['button--alt']} onClick={onClose}>Close</button>
         {
            hasItems && 
            <button className={css.button} onClick={ () => setCheckingOut(true) }>
               Order
            </button>
         }
      </div>;

   return (
      <Modal onClose={onClose}>
         {items}
         <div className={css.total}>
            <span>Total amount</span>
            <span>{amount}</span>
         </div>
         { checkingOut && <Checkout onCancel={ onClose } /> }
         { !checkingOut && actions }
      </Modal>
   );
};

export default Cart;