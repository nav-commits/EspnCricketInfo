import React, { useState } from 'react';
import styles from './MainNav.module.scss';
import { mainNavArray } from './MainNav.types';
import Dropdown from '../Dropdown/Dropdown';

const MainNav = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const dropdownItems = [
        { label: 'Link 1', url: '/link1' },
        { label: 'Link 2', url: '/link2' },
        { label: 'Link 3', url: '/link3' },
        { label: 'Link 4', url: '/link4' },
        { label: 'Link 5', url: '/link5' },
    ];

    return (
        <>
            <div className={styles.main__container} onMouseLeave={handleMouseLeave}>
                {mainNavArray.map((item, idx) => (
                    <div
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeIndex === idx ? '#0288C6' : '',
                        }}
                        key={idx}
                        onMouseEnter={() => handleMouseEnter(idx)}
                    >
                        {item}
                        {activeIndex === idx && <Dropdown items={dropdownItems} />}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainNav;
