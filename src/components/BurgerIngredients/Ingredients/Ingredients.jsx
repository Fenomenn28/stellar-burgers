import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Ingredients.module.css';
import React from 'react';
import PropTypes from 'prop-types'; 

function Ingredients (props) {
const  [counter, setCounter] = React.useState({quantity: 0, check: false});

  const counterUp =() => {
    setCounter({...counter, quantity: counter.quantity + 1, check: true});
  }

  return (
    <div className={styles.ingredient} key={props.ingredient._id} onClick={counterUp}>
      {counter.check &&
        <div className={styles.one}>
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
  )
}

Ingredients.propTypes = {
  api: PropTypes.array
}; 

export default Ingredients;