import React from 'react';
import { DropdownProps } from './Dropdown.types';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC<DropdownProps> = ({ dropdown }) => (
    <div className={styles.dropdown__content}>
        {dropdown.map((item, idx) => (
            <ul
                key={idx}
                className={styles['main__container--list']}
            >
                {item.dropdownItems.map((subItem, subIdx) => (
                    <li key={subIdx} style={{ marginRight: '10px' }}>
                        {subItem}
                    </li>
                ))}
            </ul>
        ))}
    </div>
);

export default Dropdown;
