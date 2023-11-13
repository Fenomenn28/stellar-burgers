import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import React from 'react';
import Modal from '../../modal/Modal';
import {ingredientPropType} from '../../../utils/prop-types';
import useModal from '../../../hooks/useModal';
import IngredientDetails from './ingredient-details/IngredientDetails';


function Ingredient (props) {
  const [counter, setCounter] = React.useState({quantity: 0, check: false});

  const { isModalOpen, openModal, closeModal } = useModal();

  const modal = (
    <Modal close={closeModal} title={'Детали ингредиента'}>
      <IngredientDetails currentIngredient={props.ingredient} />
    </Modal>
  )

  return (
    <>
      <div className={styles.ingredient} onClick={openModal} >
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

Ingredient.propTypes = {
  ingredient: ingredientPropType.isRequired
};

export default Ingredient;



