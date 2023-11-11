import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import styles from './burgerConstructor.module.css';
import ConfirmationPicture from '../../images/done.png';
import {ingredientsPropType} from '../../utils/prop-types';
import React from 'react'; 



function BurgerConstructor (props) {
  const [modalState, setModalState] = React.useState({visible: false})
  
  const popupSwitch = () => {
    setModalState({visible: !modalState.visible})
  }
  
  const modal = (
    <Modal onClose={popupSwitch}>
      <button className={styles.closeButton} onClick={popupSwitch}></button>
      <p className={`text text_type_digits-large ${styles.popupNumberOrder}`}>034536</p>
      <p className={`text text_type_main-medium ${styles.popupHeading}`}>идентификатор заказа</p>
      <img className={styles.popupImage} src={ConfirmationPicture} alt='Подтверждающая фотография'></img>
      <p className={`text text_type_main-default ${styles.popupInfo}`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive ${styles.popupAdvice}`}>Дождитесь готовности на орбитальной станции</p>
    </Modal>
  )
  
  return (
    <>
    <section className={styles.burgerConstructor}>
      <div className={styles.firstBun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <ul className={`${styles.list} custom-scroll`}>
        {props.api.map((items) => (
          <li className={styles.listItem} key={items._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              key={items.id}
              text={items.name}
              price={items.price}
              thumbnail={items.image}
            />
          </li>
        ))}
      </ul>
      <div className={styles.secondBun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      {/*Стоимость и покупка*/}
      <div className={styles.orderBox}> 
        <Button htmlType="button" type="primary" size="large" onClick={popupSwitch}>
          Оформить заказ
        </Button>
        <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
    {modalState.visible && modal}
    </>
  )
}

BurgerConstructor.propTypes = {
  api: ingredientsPropType.isRequired
};

export default BurgerConstructor;


