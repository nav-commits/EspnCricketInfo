import React from 'react';
import Chip from '../../Atoms/Chip/Chip';
import styles from './ChipsContent.module.scss';
import { ChipContentProps } from './ChipsContent.types';

const ChipsContent: React.FC<ChipContentProps> = ({
    onClick,
    chipActive,
    moveChipBackToOriginal,
    icon,
}) => {
    return (
        <div className={styles['chips-container']}>
            <p className={styles['chips-container--reset-chip']}>Reset</p>
            {chipActive?.map((chip, index) => (
                <Chip
                    key={index}
                    label={chip.label}
                    onClick={onClick ? () => onClick(index) : undefined}
                    moveChipBackToOriginal={moveChipBackToOriginal? () => moveChipBackToOriginal(index) : undefined}
                    index={index}
                    icon={icon}
                    checkSelected={chip.isSelected}
                />
            ))}
        </div>
    );
};

export default ChipsContent;
