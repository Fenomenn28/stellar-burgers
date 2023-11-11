import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Ingredient.module.css';
import React from 'react';
import Modal from '../../Modal/Modal';
import {ingredientPropType} from '../../../utils/prop-types'

function Ingredient (props) {
  const [counter, setCounter] = React.useState({quantity: 0, check: false});
  const [state, setState] = React.useState({visible: false})

  const popupSwitch = () => {
    setState({visible: !state.visible})
  }

  const {name, calories, proteins, fat, carbohydrates, _id, image, price, ...rest} = props.ingredient;

const modal = (
  <Modal onClose={popupSwitch}>
    <div className={styles.modalHeader}>
      <p className={`text text_type_main-large ${styles.popupHeading}`}>Детали ингредиента</p>
      <button className={styles.closeButton} onClick={popupSwitch}></button>
    </div>
    <img className={styles.popupImage} src={image} alt='Ошибка'></img>
    <p className={`$text text_type_main-medium ${styles.popupName}`}>{name}</p>
    <ul className={styles.popupList}>
      <li className={styles.listItem}>
      <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
      <p className="text text_type_digits-default text_color_inactive">{calories}</p>
      </li>
      <li className={styles.listItem}>
      <p className="text text_type_main-default text_color_inactive">Белки, г</p>
      <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
      </li>
      <li className={styles.listItem}>
      <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
      <p className="text text_type_digits-default text_color_inactive">{fat}</p>
      </li>
      <li className={styles.listItem}>
      <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
      <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
      </li>
    </ul>
  </Modal>
)

  return (
    <>
      <div className={styles.ingredient} onClick={popupSwitch} key={_id}>
        {/*счетчик */}
        {counter.check &&
          <div className={styles.counter}>
            <Counter count={counter.quantity} size="default" extraClass="m-1" />
          </div>
        }
        
        <img className={styles.ingredientImage} src={image} alt='каринка'></img>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName}>{name}</p>
      </div>
      {state.visible && modal}
    </>
  )
}

Ingredient.propTypes = {
  ingredient: ingredientPropType.isRequired
};

export default Ingredient;



