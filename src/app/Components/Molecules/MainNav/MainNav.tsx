import React from 'react';
import styles from './MainNav.module.scss';
import { mainNavArray } from '../../../Utils/NavBar';

const MainNav = () => {
    return (
        <div className={styles.main_nav_container}>
            {mainNavArray.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
};

export default MainNav;
