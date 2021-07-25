import css from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, meal }) => {
   return (
      <li className={ css.meal }>
         <div>
            <h3>{ meal.name }</h3>
            <div className={ css.description }>{ meal.description }</div>
            <div className={ css.price }>${ meal.price.toFixed(2) }</div>
         </div>
         <div>
            <MealItemForm id={ id } />
         </div>
      </li>
   );
};

export default MealItem;