import React from 'react';
import styles from './Decorations.module.scss';

const Decorations = () => {
    return (
        <>
            <div className={styles.decoration + ' ' + styles.blob1} />
            <div className={styles.decoration + ' ' + styles.blob2} />
            <div className={styles.decoration + ' ' + styles.dots} style={{ top: '20%', right: '10%' }} />
            <div className={styles.decoration + ' ' + styles.dots} style={{ bottom: '15%', left: '5%' }} />
        </>
    );
};

export default Decorations; 