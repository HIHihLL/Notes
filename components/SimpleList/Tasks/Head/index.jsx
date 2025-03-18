import cn from "classnames";
import Icon from "@/components/Icon";
import useEventsStore from "@/store/useEventsStore";
import styles from "./Head.module.sass";


const Head = ({ title, addButtonRef }) => {
    const { isOpenActions, isNewTask, toggleNewTask, setActiveGroupId } =
        useEventsStore((state) => state);

    return (
        <div className={cn(styles.head, { [styles.hide]: isOpenActions })}>
            <div
                className={cn(styles.back, { [styles.hide]: isNewTask })}
                onClick={() => setActiveGroupId(null)}
            >
                <button className={styles.arrow}>
                    <Icon name="arrow-left" />
                </button>
                <span>{title}</span>
            </div>
            <button
                className={cn(styles.add, {
                    [styles.active]: isNewTask,
                })}
                onClick={toggleNewTask}
                ref={addButtonRef}
            >
                <Icon name="plus" />
                <div className={styles.tooltip}>
                    {isNewTask ? (
                        "Отмена"
                    ) : (
                        <div className={styles.line}>
                            Добавить новую задачу <div className={styles.sign}>/</div>
                        </div>
                    )}
                </div>
            </button>
        </div>
    );
};

export default Head;
