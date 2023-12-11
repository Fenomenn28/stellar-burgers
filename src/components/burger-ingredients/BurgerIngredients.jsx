import { Tab  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import React from 'react'; 
import Ingredient from './ingredient/Ingredient';

import { BASE_URL } from "../../utils/data";
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { getIngredients } from '../../services/actions/burger-ingredients';

function BurgerIngredients () {
  const [current, setCurrent] = React.useState('one');
  const [array, setArray] = React.useState({loading: false});

  {/* redux */}
  const dispatch = useDispatch();
  const allIngredients = useSelector(state => (state.burgerIngredients.allIngredients));

  {/* Навигация */}
  const { ref: refBun, inView: inViewBun } = useInView({ threshold: 0.16 });
  const { ref: refSauce, inView: inViewSauce } = useInView({ threshold: 0.16 });
  const { ref: refMain, inView: inViewMain } = useInView({ threshold: 0.4 });

  React.useEffect(() => {
    dispatch(getIngredients(BASE_URL + '/ingredients'));
  }, [])

  React.useEffect(() =>{
    setCurrent(inViewBun ? 'one' : inViewSauce ? 'two' : inViewMain ? 'three' : '');

    const bun = allIngredients.filter((item) => item.type === 'bun');
    const main = allIngredients.filter((item) => item.type === 'main');
    const sauce = allIngredients.filter((item) => item.type === 'sauce');

    setArray({bun, main, sauce, loading: true})

  },[inViewBun, inViewSauce, inViewMain, allIngredients])


  return (
    <section className={styles.BurgerIngredients}>
      {/* Навигация */}
      <h1 className={styles.title}>Соберите бургер</h1>
      <div className={styles.tab}>
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
          <div ref={refBun} className={styles.departmentGrid}>
            {array.bun.map((item) => <Ingredient ingredient={item} key={item._id}/>)}
          </div>
          {/* Соусы */}
          <p className={styles.departmentInfo}>Соусы</p>
          <div ref={refSauce} className={styles.departmentGrid}>
            {array.sauce.map((item) => <Ingredient ingredient={item} key={item._id}/>)}
          </div>
          {/* Основное */}
          <p className={styles.departmentInfo}>Основное</p>
          <div ref={refMain} className={styles.departmentGrid}>
            {array.main.map((item) => <Ingredient ingredient={item} key={item._id}/>)}
          </div>
        </div>
      }
    </section>
  )
}


export default BurgerIngredients;



