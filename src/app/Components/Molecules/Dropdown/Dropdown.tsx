import React from 'react';
import './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.types';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { items } = props;
    return (
        <div className={styles.dropdown__content}>
            {items.map((item, index) => (
                <p style={{padding:'10px'}} className={'styles.dropdown__content--text'} key={index}>
                    {item.label}
                </p>
            ))}
        </div>
    );
};

export default Dropdown;
