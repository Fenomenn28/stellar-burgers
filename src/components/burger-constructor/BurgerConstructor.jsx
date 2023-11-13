import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import {ingredientsArrayType} from '../../utils/prop-types'; 
import useModal from '../../hooks/useModal';
import OrderDetails from './order-details/OrderDetails';
import Modal from '../modal/Modal';
import React from 'react';


function BurgerConstructor (props) {
  
  const { isModalOpen, openModal, closeModal } = useModal();
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    setIngredients(props.ingredients.filter((item) => item.type !== 'bun')); 
  },[]);
  
  const modal = (
    <Modal close={closeModal}>
      <OrderDetails />
    </Modal>
  )
  
  return (
    <>
    <section className={styles.burgerConstructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      <ul className={`${styles.list} custom-scroll`}>
        {ingredients.map((items) => (
          <li className={styles.listItem} key={items._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={items.name}
              price={items.price}
              thumbnail={items.image}
            />
          </li>
        ))}
      </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />

      {/*Стоимость и покупка*/}
      <div className={styles.orderBox}> 
        <Button htmlType="button" type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
        <div className = {styles.priceBox}>
        <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
    {isModalOpen && modal}
    </>
  )
}

BurgerConstructor.propTypes = {
  ingredients: ingredientsArrayType.isRequired
};

export default BurgerConstructor;


