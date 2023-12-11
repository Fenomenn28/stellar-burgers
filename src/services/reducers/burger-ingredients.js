import { 
  GET_INGREDIENTS, 
  GET_SELECTED_INGREDIENT,
  DELETE_SELECTED_INGREDIENT 
} from '../actions/burger-ingredients';


const initialState = {
  allIngredients: [],
  selectedIngredient: {
    image: null,
    name: null,
    calories: null,
    proteins: null,
    fat: null,
    carbohydrates: null
  }
};

function burgerIngredients(state = initialState, action) {
  switch(action.type) {
    case GET_INGREDIENTS:
      return {  
        ...state,
        allIngredients: action.ingredients.data
      }
    case GET_SELECTED_INGREDIENT:
      return {
        ...state,
        selectedIngredient: {
          image: action.image,
          name: action.name,
          calories: action.calories,
          proteins: action.proteins,
          fat: action.fat,
          carbohydrates: action.carbohydrates
        }
      } 
    case DELETE_SELECTED_INGREDIENT:
      return{
        ...state,
        selectedIngredient: {
          image: null,
          name: null,
          calories: null,
          proteins: null,
          fat: null,
          carbohydrates: null
        }
      }
    default:
      return state;
  }
}

export default burgerIngredients;