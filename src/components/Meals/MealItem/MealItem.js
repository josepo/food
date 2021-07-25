import css from './MealItem.module.css';

const MealItem = ({ meal }) => {
   return (
      <li className={ css.meal }>
         <div>
            <h3>{ meal.name }</h3>
            <div className={ css.description }>{ meal.description }</div>
            <div className={ css.price }>${ meal.price.toFixed(2) }</div>
         </div>
         <div>

         </div>
      </li>
   );
};

export default MealItem;