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
    // need to make fixes so that mainNav is the dropdownItems then just filter through that

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
        { label: 'Series', dropdownItems: ['Series 1', 'Series 2', 'Series 3'] },
        { label: 'Teams', dropdownItems: ['Team 1', 'Team 2', 'Team 3'] },
        { label: 'News', dropdownItems: ['News 1', 'News 2', 'News 3'] },
        { label: 'Features', dropdownItems: ['Feature 1', 'Feature 2', 'Feature 3'] },
        { label: 'Videos', dropdownItems: ['Video 1', 'Video 2', 'Video 3'] },
        { label: 'Stats', dropdownItems: ['Stats 1', 'Stats 2', 'Stats 3'] },
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
