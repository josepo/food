import React from 'react';
import css from './Input.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
   return (
      <div className={ css.input }>
         <label htmlFor={ input.id }>{ label }</label>
         <input ref={ ref } { ...input }></input>
      </div>
   )
});

export default Input;