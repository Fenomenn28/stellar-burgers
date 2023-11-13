import styles from './ingredientDetails.module.css';
import {ingredientPropType} from '../../../../utils/prop-types';

function IngredientDetails (props) {

  const {name, calories, proteins, fat, carbohydrates, image} = props.currentIngredient;

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

IngredientDetails.propTypes = {
  currentIngredient: ingredientPropType.isRequired
};

export default IngredientDetails




