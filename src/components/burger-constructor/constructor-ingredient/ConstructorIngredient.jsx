import styles from './constructor-ingredient.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { deletIngredient } from '../../../services/actions/burger-constructor';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { moveCard } from '../../../services/actions/burger-constructor';
import PropTypes from "prop-types";


function ConstructorIngredient ( props ) {
  const dispatch = useDispatch();
  
  const ref = useRef();
  const [{ handlerId }, drop] = useDrop({
    accept: 'ItemTypes',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = props.index
      
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      
      dispatch(moveCard(dragIndex, hoverIndex))
      
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'ItemTypes',
    item: () => {
      return { id: props.id, index: props.index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return(
    <li ref={ref} className={styles.listItem} style={{ opacity }} data-handler-id={handlerId}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
        handleClose={() => {dispatch(deletIngredient(props.id))}}
      />
    </li>
  )
}

ConstructorIngredient.propTypes = {
  id: PropTypes.string, 
  image: PropTypes.string, 
  index: PropTypes.number, 
  name: PropTypes.string, 
  price: PropTypes.number
};

export default ConstructorIngredient 