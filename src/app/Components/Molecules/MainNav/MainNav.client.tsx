import React, { useState } from 'react';
import styles from './MainNav.module.scss';
import { MainNavProps } from './MainNav.types';
import Dropdown from '../Dropdown/Dropdown';

const MainNav: React.FC<MainNavProps> = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState<string>('');

    const handleMouseEnter = (itemLabel: string) => {
        setHoveredItem(itemLabel);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
    };
    const dropdownItems = [
        {
            label: 'Live Scores',
            dropdownItems: [
                'Live Scores',
                'Results',
                'Season View',
                'Desktop Scoreboard',
                'Schedule',
            ],
        },
        { label: 'Series', dropdownItems: ['U19 World Cup', 'SA20 2024', 'IPL 2024'] },
        { label: 'Teams', dropdownItems: ['Australia', 'Bangladesh', 'England', 'India'] },
        { label: 'News', dropdownItems: ['News Home', 'Racism', 'Corruption'] },
        { label: 'Features', dropdownItems: ['Features Home', 'Writers', 'On this day'] },
        { label: 'Videos', dropdownItems: ['Match day', 'Safe Hands', 'Men of Platinum'] },
        { label: 'Stats', dropdownItems: ['Stats Home', 'All Records', 'Rankings'] },
    ];

    const filteredDropdownItems = dropdownItems.find((item) => item.label === hoveredItem);

    return (
        <div className={styles.main__container} onMouseLeave={handleMouseLeave}>
            {items.map((item, idx) => (
                <div
                    className={`${styles['main__container--item']} ${
                        filteredDropdownItems?.label === item.value
                            ? styles['main__container--active-blue']
                            : ''
                    }`}
                    key={idx}
                    onMouseEnter={() => handleMouseEnter(item.value)}
                >
                    <p> {item.value}</p>
                    {filteredDropdownItems && filteredDropdownItems.label === item.value && (
                        <Dropdown dropdown={[filteredDropdownItems]} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default MainNav;
