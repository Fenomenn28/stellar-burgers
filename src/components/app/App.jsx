import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients"
import BurgerConstructor from "../burger-constructor/BurgerConstructor"



function App() {

  return (
    <>
      <AppHeader /> 
        <main className={styles.content}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
    </>
  );
}

export default App;


