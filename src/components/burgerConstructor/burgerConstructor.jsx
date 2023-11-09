import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import React from 'react'; 
import PropTypes from 'prop-types';

function BurgerConstructor (props) {
  
  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.firstBun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <ul className={`${styles.list} custom-scroll`}>
        {props.api.map((items) => (
          <li className={styles.listItem} key={items._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              key={items.id}
              text={items.name}
              price={items.price}
              thumbnail={items.image}
            />
          </li>
        ))}
      </ul>
      <div className={styles.secondBun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i"
          price={1255}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
      <div className={styles.orderBox}> 
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
        <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  api: PropTypes.array
}; 

export default BurgerConstructor;


