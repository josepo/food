import { useState, useRef } from 'react';
import Input from '../../UI/Input';

import css from './MealItemForm.module.css';

const MealItemForm = ({ id, onAdd }) => {
   const [valid, setValid] = useState(true);
   const input = useRef();

   const add = e => {
      e.preventDefault();

      const amount = input.current.value;

      if (
         amount.trim().length === 0 || 
         +amount < 1 || 
         +amount > 5)
      {
         setValid(false);
         return;
      }

      onAdd(+amount);
   };

   return (
      <form className={css.form} onSubmit={add}>
         <Input
            label='Amount'
            ref={input}
            input={{
               id: 'amount_' + id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1'
            }}
         />

         <button>+ Add</button>
         { !valid && <p>Please enter a valid amount (1-5).</p> }
      </form>
   )
};

export default MealItemForm;