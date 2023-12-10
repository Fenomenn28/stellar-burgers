export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const GET_ORDER_DATA = 'GET_ORDER_NUMBER';
export const DELETE_INGREDIENT = 'DELET_INGREDIENT';
export const ADD_SELECTED_BUN = 'ADD_SELECTED_BUN';
export const MOVE_CARD = 'MOVE_CARD';

export const deletIngredient = (key) => ({
  type: DELETE_INGREDIENT,
  key: key
});
{/* Отправка заказа и получение его номера */}
export const sendOrderData = (address, ingredientsArray, bun) => {
  return function(dispatch) {
    const ingredientsIds = ingredientsArray.map(item => item._id);
    ingredientsIds.unshift(bun._id);
    ingredientsIds.push(bun._id)
    
    fetch(address ,{
      method: 'POST',
      body: JSON.stringify({ 
        "ingredients": ingredientsIds
      }),
      headers: {
      'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Ошибка ${res.status}`);
    })
    .then((res) => {
      dispatch({
        type: GET_ORDER_DATA,
        ...res
      })
    })
    .catch(console.error); 
  }
}
{/* action для перетаскивания внутри контейнера */}
export const moveCard = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_CARD,
    dragIndex,
    hoverIndex
  };
};