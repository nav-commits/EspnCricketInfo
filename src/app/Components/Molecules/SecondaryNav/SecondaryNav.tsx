import React from 'react';
import styles from './SecondaryNav.module.scss';
import { SecondaryNavArray } from '../SecondaryNav/Secondary.types';

const MainNav = () => {
    return (
        <div className={styles.secondary__container}>
            {SecondaryNavArray.map((item, idx) => {
                const IconComponent = item.value as React.ComponentType;
                return (
                    <div key={idx}>
                        {item.type === 'text' ? (
                            <span>{typeof item.value === 'string' ? item.value : ''}</span>
                        ) : (
                            <IconComponent />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default MainNav;
