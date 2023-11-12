import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import { menu } from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients"
import BurgerConstructor from "../burger-constructor/BurgerConstructor"
import { useEffect, useState } from "react";



function App() {
  const [state, setState] = useState({});
  


  useEffect(() => { 
  fetch(menu) 
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Ошибка ${res.status}`);
    })
    .then((res) => {
      setState({...res});
    })
    .catch(console.error); 
}, []);

  return (
    <>
      <AppHeader />
      {state.data && 
        <main className={styles.content}>
          <BurgerIngredients ingredients={state.data}/>
          <BurgerConstructor ingredients={state.data}/>
        </main>
      }
    </>
  );
}

export default App;


