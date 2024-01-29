import React from 'react';
import { DropdownProps } from './Dropdown.types';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC<DropdownProps> = ({ items }) => (
    <div className={styles.dropdown__content}>
        {items.map((item, index) => (
            <p  key={index}>
                {item.label}
            </p>
        ))}
    </div>
);

export default Dropdown;
