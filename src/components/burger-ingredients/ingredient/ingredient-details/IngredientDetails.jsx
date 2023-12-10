import styles from './ingredientDetails.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails ( ) {

  const {
    name, 
    calories, 
    proteins, 
    fat, 
    carbohydrates, 
    image
  } = useSelector(state => state.burgerIngredients.selectedIngredient);

  return(
    <>
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
    </>
  )
}

export default IngredientDetails




