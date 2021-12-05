import { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';

import Modal from '../UI/Modal';

import CartItem from './CartItem';
import css from './Cart.module.css';
import Checkout from './Checkout';

const Cart = ({ onClose }) => {
   const ctx = useContext(CartContext);
   const [checkingOut, setCheckingOut] = useState(false);
   const [ordering, setOrdering] = useState(false);
   const [didSubmit, setDidSubmit] = useState(false);

   const amount = `$${ctx.total.toFixed(2)}`;
   const hasItems = ctx.items.length > 0;

   const removeItem = id => { ctx.removeItem(id); };
   const addItem = item => { ctx.addItem({ ...item, amount: 1 }) };

   const order = async (user) => {
      setOrdering(true);

      await fetch('https://meals-data-d7428-default-rtdb.firebaseio.com/orders.json', {
         method: 'POST',
         body: JSON.stringify({
            user: user,
            items: ctx.items
         })
      });

      setOrdering(false);
      setDidSubmit(true);
      ctx.clear();
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

   const content = (
      <>
         {items}
         <div className={css.total}>
            <span>Total amount</span>
            <span>{amount}</span>
         </div>
         { checkingOut && <Checkout onConfirm={ order } onCancel={ onClose } /> }
         { !checkingOut && actions }
      </>
   );

   return (
      <Modal onClose={onClose}>
         { didSubmit && <p>Your order was sent.</p> }
         { ordering && <p>Sending order data...</p> }
         { !ordering && !didSubmit && content }
      </Modal>
   );
};

export default Cart;