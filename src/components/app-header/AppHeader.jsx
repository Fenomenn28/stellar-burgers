import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader (props) {
    return (
        <header className={styles.header}> 
            <nav className={styles.nav}>
                <div className={styles.buttonsBox}>
                    <button className={`${styles.button} ${styles.buttonActive}`}>
                        <BurgerIcon type="primary" />
                        Конструктор
                    </button>
                    <button className={styles.button}>
                        <ListIcon type="secondary" />
                        Лента заказов
                    </button>
                </div>
                <div className={styles.logo}><Logo /></div>
                <button className={styles.button}>
                    <ProfileIcon type="secondary" />
                    Личный кабинет
                </button>
            </nav>
            
        </header>
    )
}

export default AppHeader;

