import { useContext } from 'react';
import CartContext from '../../../store/CartContext';

import css from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, meal }) => {
   const ctx = useContext(CartContext);

   const add = amount => {
      ctx.addItem({
         id: id,
         name: meal.name,
         amount: amount,
         price: meal.price
      });
   };

   return (
      <li className={ css.meal }>
         <div>
            <h3>{ meal.name }</h3>
            <div className={ css.description }>{ meal.description }</div>
            <div className={ css.price }>${ meal.price.toFixed(2) }</div>
         </div>
         <div>
            <MealItemForm id={ id } onAdd={ add } />
         </div>
      </li>
   );
};

export default MealItem;