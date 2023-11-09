import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { data } from "../../utils/data";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"
import BurgerConstructor from "../burgerConstructor/burgerConstructor"



function App() {
  
  return (
    <>
      <AppHeader />
      <div className={styles.content}>
        <BurgerIngredients api={data}/>
        <BurgerConstructor api={data}/>
      </div>
    </>
  );
}

export default App;