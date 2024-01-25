import React from 'react';
import styles from './SecondaryNav.module.scss';
import { secondaryNavArray } from '../../../Utils/NavBar';

const MainNav = () => {
    return (
        <div className={styles.secondary_nav_container}>
            {secondaryNavArray.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
};

export default MainNav;
