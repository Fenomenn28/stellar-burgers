import { Tab  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import React from 'react'; 
import Ingredient from './Ingredient/Ingredient';
import {ingredientsPropType} from '../../utils/prop-types';

function BurgerIngredients (props) {
    const [current, setCurrent] = React.useState('one');
    const [array, setArray] = React.useState({loading: false});
    
    React.useEffect(() =>{
      const bun = props.api.filter((item) => item.type === 'bun');
      const main = props.api.filter((item) => item.type === 'main');
      const sauce = props.api.filter((item) => item.type === 'sauce');

      setArray({bun, main, sauce, loading: true})
    },[])
    
    
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

        {array.loading && 
          <div className={`${styles.departments} custom-scroll`}>
            {/* Булки */}
            <p className={styles.departmentInfo}>Булки</p>
            <div className={styles.departmentGrid}>
              {array.bun.map((item) => <Ingredient ingredient={item} />)}
            </div>
            {/* Соусы */}
            <p className={styles.departmentInfo}>Соусы</p>
            <div className={styles.departmentGrid}>
              {array.sauce.map((item) => <Ingredient ingredient={item} />)}
            </div>
            {/* Основное */}
            <p className={styles.departmentInfo}>Основное</p>
            <div className={styles.departmentGrid}>
              {array.main.map((item) => <Ingredient ingredient={item} />)}
            </div>
          </div>
        }
      </section>
    )
}

BurgerIngredients.propTypes = {
api: ingredientsPropType.isRequired
};

export default BurgerIngredients;



