import React, { useState } from 'react';
import styles from './MainNav.module.scss';
import { MainNavProps } from './MainNav.types';
import Dropdown from '../Dropdown/Dropdown';
import {dropdownItems} from '../../../Utils/Data'

const MainNav: React.FC<MainNavProps> = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState<string>('');

    const handleMouseEnter = (itemLabel: string) => {
        setHoveredItem(itemLabel);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
    };
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
