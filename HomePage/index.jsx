
import { useState } from "react";
import cn from "classnames";
import Icon from "../components/Icon";
import SimpleList from "../components/SimpleList";
import styles from "./Home.module.sass";

const HomePage = () => {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className={styles.outer}>

            <SimpleList className={styles.simpleList} />

             <a className={styles.logo} href="/">
                <img
                    src="/images/demo/logo.png"
                    width={52}
                    height={52}
                />
            </a> 
            <div
                className={cn(styles.background, {
                    [styles.visible]: activeId === 1,
                })}
            >
                <img
                    className={styles.image}
                    src="/images/demo/background.png"
                />
            </div>
            <div className={styles.options}>
                <button
                    className={cn(styles.option, {
                        [styles.active]: activeId === 0,
                    })}
                    onClick={() => setActiveId(0)}
                >
                    <div className={styles.circle}></div>
                </button>

               
                
            </div>
        </div>
    );
};

export default HomePage;
