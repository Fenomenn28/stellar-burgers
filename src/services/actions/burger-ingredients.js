import { checkResponse } from '../../utils/data';
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_SELECTED_INGREDIENT = 'GET_SELECTED_INGREDIENT';
export const DELETE_SELECTED_INGREDIENT = 'DELETE_SELECTED_INGREDIENT';

export  const getSelectedIngredient = (ingredient) => ({
          type: GET_SELECTED_INGREDIENT,
          image: ingredient.image,
          name: ingredient.name,
          calories: ingredient.calories,
          proteins: ingredient.proteins,
          fat: ingredient.fat,
          carbohydrates: ingredient.carbohydrates
        })

export function getIngredients (address) {
    return function(dispatch){
      fetch(address) 
      .then(checkResponse)
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS,
          ingredients: res
        })
      })
      .catch(console.error); 
    }
  }

