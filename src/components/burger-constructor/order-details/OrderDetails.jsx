import styles from './order-details.module.css';
import ConfirmationPicture from '../../../images/done.png';

function OrderDetails ()  {
  return(
    <>
      <p className={`text text_type_digits-large ${styles.popupNumberOrder}`}>034536</p>
      <p className={`text text_type_main-medium ${styles.popupHeading}`}>идентификатор заказа</p>
      <img className={styles.popupImage} src={ConfirmationPicture} alt='Подтверждающая иконка'></img>
      <p className={`text text_type_main-default ${styles.popupInfo}`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive ${styles.popupAdvice}`}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

export default OrderDetails;