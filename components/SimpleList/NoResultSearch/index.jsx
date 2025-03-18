
import styles from "./NoResultSearch.module.sass";


const NoResultSearch = ({ search, isVisible }) => {
    return (
        isVisible && (
            <div className={styles.noResult}>
                <div className={styles.preview}>
                    <div className={styles.image}>
                        <img
                            src="/images/oops.svg"
                            width={403}
                            height={575}
                            alt=""
                        /> 
                    </div>
                    <div className={styles.title}>OOPS</div>
                </div>
                <div className={styles.text}>
                    No result for “<span>{search}</span>”, try again.
                </div>
            </div>
        )
    );
};

export default NoResultSearch;
