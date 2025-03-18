import IllustrationEmptyList from "../../IllustrationEmptyList";
import styles from "./EmptyTasks.module.sass";


const EmptyTasks = ({ isVisible }) => {
    return (
        isVisible && (
            <div className={styles.emptyList}>
                <IllustrationEmptyList
                    className={styles.illustration}
                    emptyTasks
                />
                <div className={styles.text}>
                    Этот список пуст. Добавьте несколько пунктов.
                </div>
            </div>
        )
    );
};

export default EmptyTasks;
