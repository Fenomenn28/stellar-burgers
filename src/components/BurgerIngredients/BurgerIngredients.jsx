import { Tab  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import React from 'react'; 
import Ingredients from './Ingredients/Ingredients';
import PropTypes from 'prop-types';

function BurgerIngredients (props) {
    const [current, setCurrent] = React.useState('one')

    const bun = props.api.filter((item) => item.type === 'bun');
    const main = props.api.filter((item) => item.type === 'main');
    const sauce = props.api.filter((item) => item.type === 'sauce');
    
    return (
      <section className={styles.BurgerIngredients}>
        {/* Навигация */}
        <h1 className={styles.title}>Соберите бургер</h1>
        <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
        </div>


        <div className={`${styles.departmentsMenu} custom-scroll`}>
          {/* Булки */}
          <p className={styles.departmentInfo}>Булки</p>
          <div className={styles.menu}>
            {bun.map((item) => <Ingredients ingredient={item} />)}
          </div>
          {/* Соусы */}
          <p className={styles.departmentInfo}>Соусы</p>
          <div className={styles.menu}>
            {sauce.map((item) => <Ingredients ingredient={item} />)}
          </div>
          {/* Основное */}
          <p className={styles.departmentInfo}>Основное</p>
          <div className={styles.menu}>
            {main.map((item) => <Ingredients ingredient={item} />)}
          </div>
        </div>
      </section>
    )
}

BurgerIngredients.propTypes = {
  api: PropTypes.array
}; 

export default BurgerIngredients;


