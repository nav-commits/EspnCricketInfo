import React from 'react';
import styles from './SecondaryNav.module.scss';
import { SecondaryNavProps } from './Secondary.types';

const SecondaryNav: React.FC<SecondaryNavProps> = ({ items }) => {
    return (
        <div className={styles.secondary__container}>
            {items.map((item, idx) => {
                return (
                    <div key={idx}>
                        {item.type === 'text' ? (
                            <span>{typeof item.value === 'string' ? item.value : ''}</span>
                        ) : (
                            React.createElement(item.value)
                        )}
                    </div>
                );
            })}
        </div>
    );
};


export default SecondaryNav;
