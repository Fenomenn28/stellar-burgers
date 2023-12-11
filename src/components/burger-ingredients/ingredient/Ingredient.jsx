import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import React from 'react';
import Modal from '../../modal/Modal';
import {ingredientPropType} from '../../../utils/prop-types';
import useModal from '../../../hooks/useModal';
import IngredientDetails from './ingredient-details/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedIngredient, DELETE_SELECTED_INGREDIENT } from '../../../services/actions/burger-ingredients';
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';


function Ingredient (props) {
  const [counter, setCounter] = React.useState({quantity: 0, check: false});
  const { isModalOpen, openModal, closeModal } = useModal();

  {/* Получение переменных с хранилища */}
  const dispatch = useDispatch();
  const {
    constructorArray, 
    currentBunName
  } = useSelector(state => ({
    constructorArray: state.burgerConstructor.burgerConstructorArray,
    currentBunName: state.burgerConstructor.currentBun.text
  }));
  

  {/* Всё о счетчике */}
  React.useEffect(() => {
    if(props.ingredient.name === currentBunName) { // Если этот ингредиент активная булка из конструктора тогда ее счетчик будет 2  
      setCounter({
        quantity: 2,
        check: true
      })
    } else { // Иначе счетчик будет ровняться количеству этого ингредиента в конструкторе 
      setCounter({ 
        quantity: constructorArray.filter(item => item.name === props.ingredient.name).length,
        check: constructorArray.some(item => item.name === props.ingredient.name)
      })
    }
  },[constructorArray, currentBunName]);

  {/* useDrag */}
  const [,dragRef] = useDrag({
    type: 'ingredient',
    item: {
      ...props.ingredient,
      key: uuidv4()
    }
  });
  
  {/* Все о popup */}
  const dispatchAndOpenModel = () => {
    dispatch(getSelectedIngredient(props.ingredient));
    openModal();
  };
  const dispatchAndCloseModel = () => {
    dispatch({type: DELETE_SELECTED_INGREDIENT});
    closeModal()
  };
  const modal = (
    <Modal close={dispatchAndCloseModel} title={'Детали ингредиента'}>
      <IngredientDetails />
    </Modal>
  );
  return (
    <>
      <div ref={dragRef} className={styles.ingredient} onClick={dispatchAndOpenModel} >
        {/*счетчик */}
        {counter.check &&
          <div className={styles.counter}>
            <Counter count={counter.quantity} size="default" extraClass="m-1" />
          </div>
        }
        
        <img className={styles.ingredientImage} src={props.ingredient.image} alt='каринка'></img>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{props.ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName}>{props.ingredient.name}</p>
      </div>
      {isModalOpen && modal}
    </>
  )
}



export default Ingredient;



