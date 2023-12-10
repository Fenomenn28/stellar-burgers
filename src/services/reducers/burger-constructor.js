import { 
  ADD_INGREDIENT, 
  GET_ORDER_DATA,
  DELETE_INGREDIENT,
  ADD_SELECTED_BUN,
  MOVE_CARD
} from '../actions/burger-constructor';

const initialState = {
  burgerConstructorArray: [],
  currentBun: {
    text: 'Краторная булка N-200i',
    price: 1255,
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-02.png'
  },
  orderData: {
    name: null,
    success: null,
    order: {
      number: null
    }
  }
} 

function burgerConstructor(state = initialState, action) {
  switch(action.type) {
    case ADD_INGREDIENT: 
      return {
        ...state,
        burgerConstructorArray: [...state.burgerConstructorArray, action.ingredient]
      }
    case GET_ORDER_DATA:
      return {
        ...state,
        burgerConstructorArray: [],
        currentBun: {
          text: 'Краторная булка N-200i',
          price: 1255,
          thumbnail: 'https://code.s3.yandex.net/react/code/bun-02.png'
        },
        orderData: {
          name: action.name,
          success: action.success,
          order: {
            number: action.order.number
          }
        }
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        burgerConstructorArray: state.burgerConstructorArray.filter(item => item.key !== action.key)
      }
    case ADD_SELECTED_BUN:
      return {
        ...state,
        currentBun: {
          text: action.ingredient.name,
          price: action.ingredient.price,
          thumbnail: action.ingredient.image,
          _id: action.ingredient._id
        }
      }
    case MOVE_CARD: {
      const ingredients = [...state.burgerConstructorArray];
      const temp = ingredients[action.dragIndex]
      ingredients[action.dragIndex] = ingredients[action.hoverIndex]
      ingredients[action.hoverIndex] = temp
      console.log(ingredients)
      return {
        ...state,
        burgerConstructorArray: [...ingredients]
      }
    }
    default: {
      return state
    }
  }
}

export default burgerConstructor;