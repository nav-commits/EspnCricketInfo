import React from 'react';
import Chip from '../../Atoms/Chip/Chip';
import styles from './ChipsContent.module.scss';
import { ChipContentProps } from './ChipsContent.types';

const ChipsContent: React.FC<ChipContentProps> = ({ onClick, chipActive, chips }) => {
    return (
        <div className={styles['chips-container']}>
            <p className={styles['chips-container--reset-chip']}>Reset</p>
            {chips?.map((chip, index) => (
                <Chip
                    key={index}
                    label={chip.label}
                    onClick={onClick}
                    chipActive={chipActive}
                />
            ))}
        </div>
    );
};

export default ChipsContent;
