import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { menu } from "../../utils/data";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"
import BurgerConstructor from "../burgerConstructor/burgerConstructor"
import { useEffect, useState } from "react";
import {Modal} from '../../utils/prop-types';



function App() {
  const [state, setState] = useState({});
  
  useEffect(() => {
    fetch(menu)
    .then((res) => res.json())
    .then((res) => {
      setState({...res})
    })
    .catch((err) => {
      console.log('C API беда 😨' + err)
    })
  },[])

  return (
    <>
      <AppHeader />
      {state.data && 
        <div className={styles.content}>
          <BurgerIngredients api={state.data}/>
          <BurgerConstructor api={state.data}/>
        </div>
      }
    </>
  );
}

export default App;


