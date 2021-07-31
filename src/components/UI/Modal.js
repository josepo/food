import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Backdrop = ({ onClose }) =>
   <div className={ css.backdrop } onClick={ onClose } />; 

const Overlay = ({ children }) =>
{
   return (
      <div className={ css.modal }>
         <div className={ css.content }>
            { children }
         </div>
      </div>
   );
};

const portal = document.getElementById('overlays');

const Modal = ({ children, onClose }) =>
{
   return (
      <>
         { ReactDOM.createPortal(<Backdrop onClose={ onClose } />, portal) }
         { ReactDOM.createPortal(<Overlay>{ children }</Overlay>, portal) }
      </>
   );
};

export default Modal;