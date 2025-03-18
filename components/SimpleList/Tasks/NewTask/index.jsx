import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import OutsideClickHandler from "react-outside-click-handler";
import TextareaAutosize from "react-textarea-autosize";
import cn from "classnames";
import Icon from "@/components/Icon";
import useEventsStore from "@/store/useEventsStore";
import useTasksStore from "@/store/useTasksStore";
import styles from "./NewTask.module.sass";



const NewTask = ({ groupId, addButtonRef }) => {
    const [title, setTitle] = useState("");
    const { isNewTask, openNewTask, closeNewTask } = useEventsStore(
        (state) => state
    );
    const { addNewTask } = useTasksStore((state) => state);

    useHotkeys("/", () => {
        setTitle("");
        setTimeout(() => openNewTask(), 0);
    });

    const handleAdd = () => {
        if (title.trim() !== "") {
            addNewTask(groupId, title);
            setTitle("");
            closeNewTask();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    const handleChange = (e) => {
        const newTitle = e.target.value;
        if (newTitle.length <= 140) {
            setTitle(newTitle);
        }
    };

    const handleOutsideClick = (event) => {
        if (
            addButtonRef.current &&
            addButtonRef.current.contains(event.target)
        ) {
            return;
        }
        closeNewTask();
    };

    return (
        isNewTask && (
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className={styles.form}>
                    <div className={styles.radio}></div>
                    <div className={styles.field}>
                        <TextareaAutosize
                            className={styles.input}
                            maxRows={5}
                            placeholder="Название задачи..."
                            autoFocus
                            value={title}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <button
                        className={cn(styles.add, {
                            [styles.visible]: title !== "",
                        })}
                        onClick={handleAdd}
                    >
                        <Icon name="check-circle-fill" />
                    </button>
                </div>
            </OutsideClickHandler>
        )
    );
};

export default NewTask;
