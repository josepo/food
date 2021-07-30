import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Backdrop = () => <div className={ css.backdrop } />; 

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

const Modal = ({ children }) =>
{
   return (
      <>
         { ReactDOM.createPortal(<Backdrop />, portal) }
         { ReactDOM.createPortal(<Overlay>{ children }</Overlay>, portal) }
      </>
   );
};

export default Modal;