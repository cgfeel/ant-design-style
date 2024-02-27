import { FC } from "react";
import CommonCard from "../start/CommonCard";
import useGlobalStyles from "../globalWrapper";

const CreateStyles: FC = () => {
    const { styles } = useGlobalStyles();
    return (
        <div className={styles.wraper}>
            <h2>
                <code>createStyles</code>
            </h2>
            <CommonCard />
        </div>
    );
};

export default CreateStyles;
