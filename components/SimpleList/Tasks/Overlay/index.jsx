import cn from "classnames";
import useEventsStore from "@/store/useEventsStore";
import styles from "./Overlay.module.sass";


const Overlay = ({}) => {
    const { isOpenActions, closeActions, isNewTask, closeNewTask } =
        useEventsStore((state) => state);
    return (
        <div
            className={cn(styles.overlay, {
                [styles.visible]: isOpenActions || isNewTask,
            })}
            onClick={() => {
                closeNewTask();
                closeActions();
            }}
        ></div>
    );
};

export default Overlay;
