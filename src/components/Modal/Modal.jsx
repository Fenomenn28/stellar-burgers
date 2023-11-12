import ReactDOM from 'react-dom';
import React from 'react';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal (props) {

  React.useEffect(() => {
    const checkEscKey = (e) => {
      if (e.key === 'Escape'){
        props.close()
      }
    }
    window.addEventListener('keydown', checkEscKey)
  return() => {
    window.removeEventListener('keydown', checkEscKey)
  }
  },[]);

  return ReactDOM.createPortal((
    <>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <CloseIcon onClick={props.close} type="primary"/>
          <p className={`text text_type_main-large`}>{props.title}</p>
        </div>
        {props.children}
      </div>
      <ModalOverlay close={props.close} />
    </>  
  ), modalRoot);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;

