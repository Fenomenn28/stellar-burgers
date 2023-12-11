import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css'; 
import useModal from '../../hooks/useModal';
import OrderDetails from './order-details/OrderDetails';
import Modal from '../modal/Modal';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop} from 'react-dnd';
import { BASE_URL } from '../../utils/data';
import { sendOrderData } from '../../services/actions/burger-constructor';
import ConstructorIngredient from './constructor-ingredient/ConstructorIngredient';


import { 
  ADD_INGREDIENT,  
  ADD_SELECTED_BUN,
} from '../../services/actions/burger-constructor';


////////////////////////////////////////////////////////////////////////
function BurgerConstructor ( ) {
  const { isModalOpen, openModal, closeModal } = useModal();

  {/* Получение переменных с хранилища */}
  const {
    burgerConstructorArray, 
    currentBun
  } = useSelector(state => ({
    burgerConstructorArray: state.burgerConstructor.burgerConstructorArray,
    currentBun: state.burgerConstructor.currentBun
  }));
  
  const dispatch = useDispatch()
  
  {/* useDrop */}
  const [,dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if (item.type !== 'bun'){
        dispatch({
          type: ADD_INGREDIENT,
          ingredient: item
        })
      } else {
        dispatch({
          type: ADD_SELECTED_BUN,
          ingredient: item
        })
      }
    } 
  })

  {/* все о popup */}
  const modal = (
    <Modal close={closeModal}>
      <OrderDetails />
    </Modal>
  )

  const postAndOpenPopup = () => {
    dispatch(sendOrderData(BASE_URL + '/orders', burgerConstructorArray, currentBun));
    openModal()
  } 

  {/* Вычисление общей стоимости */}
  const getPrice = () => {
    const ingredientsTotalCost = burgerConstructorArray.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    const bunsTotalCost = currentBun.price * 2;
    return ingredientsTotalCost + bunsTotalCost;
  };
  
  const price = React.useMemo(getPrice, [burgerConstructorArray, currentBun]);

  return (
    <>
      <section className={styles.burgerConstructor}>
      <div ref={dropRef}>
        <div className={styles.bun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${currentBun.text} (верх)`}
            price={currentBun.price}
            thumbnail={currentBun.thumbnail}
          />
        </div>   
        <ul className={`${styles.list} custom-scroll`}>
          {burgerConstructorArray.map((item, index) => (
              <ConstructorIngredient 
                key={item.key} 
                name={item.name} 
                price={item.price} 
                image={item.image}
                index={index}
                id={item.key}
              />
          ))}
        </ul>
        <div className={styles.bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${currentBun.text} (низ)`}
            price={currentBun.price}
            thumbnail={currentBun.thumbnail}
          />
        </div>
      </div>
      {/*Стоимость и покупка*/}
      <div className={styles.orderBox}> 
        <Button htmlType="button" type="primary" size="large" onClick={postAndOpenPopup}>
          Оформить заказ
        </Button>
        <div className = {styles.priceBox}>
        <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
    {isModalOpen && modal}
    </>
  )
}



export default BurgerConstructor;



