import React from 'react';
import styles from "./Flower.module.scss";


const Flower = ({ color, className }) => {
    return (
        <div className={`${styles.flower} ${className}`}>
                <div className={styles.petal} style={{ backgroundColor: color }}></div>
                <div className={styles.petal} style={{ backgroundColor: color }}></div>
                <div className={styles.petal} style={{ backgroundColor: color }}></div>
                <div className={styles.petal} style={{ backgroundColor: color }}></div>
                <div className={styles.petal} style={{ backgroundColor: color }}></div>
                <div className={styles.center}></div>
        </div>
    );
};

export default Flower;