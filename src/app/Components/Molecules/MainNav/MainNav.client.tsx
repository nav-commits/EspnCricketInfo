import React, { useState } from 'react';
import styles from './MainNav.module.scss';
import { MainNavProps } from './MainNav.types';
import Dropdown from '../Dropdown/Dropdown';

const MainNav: React.FC<MainNavProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const dropdownItems = [
        { label: 'Live Score' },
        { label: 'Results' },
        { label: 'Season View' },
        { label: 'Desktop Scoreboard' },
        { label: 'Schedule' },
    ];

    return (
        <>
            <div className={styles.main__container} onMouseLeave={handleMouseLeave}>
                {items.map((item, idx) => (
                    <div
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeIndex === idx ? '#0288C6' : '',
                        }}
                        key={idx}
                        onMouseEnter={() => handleMouseEnter(idx)}
                    >
                        {item.value}
                        {activeIndex === idx && <Dropdown items={dropdownItems} />}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainNav;
