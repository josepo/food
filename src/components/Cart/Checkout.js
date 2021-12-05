import css from './Checkout.module.css';

const Checkout = ({ onCancel }) => {

   const submit = e => {
      e.preventDefault();
   };

   return (
      <form onSubmit={ submit }>
         <div className={ css.control }>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' />
         </div>
         <div className={ css.control }>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' />
         </div>
         <div className={ css.control }>
            <label htmlFor='postal'>Postal code</label>
            <input type='text' id='postal' />
         </div>
         <div className={ css.control }>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' />
         </div>
         <button type='button' onClick={ onCancel }>
            Cancel
         </button>
         <button>
            Confirm
         </button>
      </form>
   )
}

export default Checkout;