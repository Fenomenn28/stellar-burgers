import ReactDOM from 'react-dom';
import React from 'react';
import styles from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const modalRoot = document.getElementById("react-modals");

function Modal (props) {

  React.useEffect(() => {
    window.addEventListener('keydown', checkEscKey)
  return() => {
    window.removeEventListener('keydown', checkEscKey)
  }
  },[]);

  const checkEscKey = (e) => {
    if (e.key === 'Escape'){
      props.onClose()
    }
  }

  return ReactDOM.createPortal((
    <>
      <div className={styles.popup}>
        {props.children}
      </div>
      <ModalOverlay onClose={props.onClose} />
    </>  
  ), modalRoot);
}

export default Modal;

