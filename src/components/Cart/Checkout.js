import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
   const [validity, setValidity] = useState({
      name: true,
      street: true,
      postalColde: true,
      city: true
   });

   const nameRef = useRef();
   const streetRef = useRef();
   const postalCodeRef = useRef();
   const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid = isFiveChars(postalCode);
    const cityIsValid = !isEmpty(city);

    setValidity({
       name: nameIsValid,
       street: streetIsValid,
       postalCode: postalCodeIsValid,
       city: cityIsValid
    });

   const valid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

   if (valid) {
      // submit
   } else {

   }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${validity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={ nameRef } />
        { !validity.name && <p>Enter a valid name</p> }
      </div>
      <div className={`${classes.control} ${validity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={ streetRef } />
        { !validity.street && <p>Enter a valid street</p> }
      </div>
      <div className={`${classes.control} ${validity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={ postalCodeRef } />
        { !validity.postalColde && <p>Enter a valid postal code</p> }
      </div>
      <div className={`${classes.control} ${validity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={ cityRef } />
        { !validity.city && <p>Enter a valid city</p> }
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;