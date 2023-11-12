import styles from './/modal-overlay.module.css';

function ModalOverlay(props) {
  return(
    <div className={styles.modalOverlay} onClick={props.close}></div>
  )
}

export default ModalOverlay;





