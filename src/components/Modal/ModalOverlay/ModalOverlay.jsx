import styles from './ModalOverlay.module.css';

function ModalOverlay(props) {
  return(
    <div className={styles.modalOverlay} onClick={props.onClose}></div>
  )
}

export default ModalOverlay;





