import React from 'react';
import styles from './SecondaryNav.module.scss';
import { SecondaryNavArray } from '../SecondaryNav/Secondary.types';

const MainNav = () => {
    return (
        <div className={styles.secondary_nav_container}>
            {SecondaryNavArray.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
};

export default MainNav;
