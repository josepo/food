import css from './Input.module.css';

const Input = ({ label, input }) => {
   return (
      <div className={ css.input }>
         <label htmlFor={ input.id }>{ label }</label>
         <input { ...input }></input>
      </div>
   )
};

export default Input;