import IllustrationEmptyList from "../IllustrationEmptyList";
import useTasksStore from "@/store/useTasksStore";
import useEventsStore from "@/store/useEventsStore";
import styles from "./EmptyList.module.sass";


const EmptyList = ({}) => {
    const { tasks } = useTasksStore((state) => state);
    const { isNewGroup } = useEventsStore((state) => state);

    return (
        !isNewGroup &&
        tasks.length === 0 && (
            <div className={styles.emptyList}>
                <IllustrationEmptyList className={styles.illustration} />
                <div className={styles.text}>      
                     Списка групп пока нет. Для начала создайте его.
                </div>
            </div>
        )
    );
};

export default EmptyList;
