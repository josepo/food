import Modal from '../UI/Modal';
import css from './Cart.module.css';

const Cart = () =>
{
   const items = (
      <ul className={ css['cart-items'] }>
      {
         [
            { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
         ].map(item => <li>{ item.name }</li>)
      }
      </ul>
   );

   return (
      <Modal>
         { items }
         <div className={ css.total }>
            <span>Total amount</span>
            <span>35.62</span>
         </div>
         <div className={ css.actions }>
            <button className={ css['button--alt']}>Close</button>
            <button className={ css.button }>Order</button>
         </div>
      </Modal>
   );
};

export default Cart;