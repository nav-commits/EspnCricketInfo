import React from 'react';
import styles from './Chip.module.scss';
import { ChipProps } from './Chip.types';

const Chip: React.FC<ChipProps> = ({ label, onClick, chipActive }) => {
   const handleClick = () => {
       if (onClick) {
           onClick(label || '');
       }
   };
    return (
        <p
            style={{
                backgroundColor: chipActive === label ? '#03A9F4' : '',
                color: chipActive === label ? 'white' : '',
            }}
            className={styles['chip']}
            onClick={handleClick}
        >
            {label}
        </p>
    );
};

export default Chip;
