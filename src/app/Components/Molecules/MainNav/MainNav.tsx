import React from 'react';
import styles from './MainNav.module.scss';
import { mainNavArray } from './MainNav.types'; 

const MainNav = () => {
    return (
        <div className={styles.main__container}>
            {mainNavArray.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
};

export default MainNav;
