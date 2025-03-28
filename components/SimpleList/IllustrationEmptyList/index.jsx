
import cn from "classnames";
import styles from "./IllustrationEmptyList.module.sass";


const IllustrationEmptyList = ({
    className,
    emptyTasks,
    completedTasks,
}) => (
    <div className={cn(className, styles.illustration)}>
        <div className={styles.circles}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.box}></div>
        <div className={styles.preview}>d
            <img
                className={styles.image}
                src={
                    emptyTasks
                        ? "/images/image-3.svg"
                        : completedTasks
                        ? "/images/image-2.svg"
                        : "/images/image-1.svg"
                }
                width={414}
                height={390}
                alt=""
            />
        </div>
    </div>
);

export default IllustrationEmptyList;
