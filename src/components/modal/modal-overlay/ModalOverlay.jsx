import styles from './/modal-overlay.module.css';
import PropTypes from "prop-types";

function ModalOverlay(props) {
  return(
    <div className={styles.modalOverlay} onClick={props.close}></div>
  )
}

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ModalOverlay;





