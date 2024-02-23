import React from 'react';
import Chip from '../../Atoms/Chip/Chip';
import styles from './ChipsContent.module.scss';
import { ChipContentProps } from './ChipsContent.types';

const ChipsContent: React.FC<ChipContentProps> = ({
    onClick,
    chipItems,
    moveChipBackToOriginal,
    icon,
    resetFilterAndChips,
    activeClass,
}) => {
    return (
        <div className={styles['chips-container']}>
            <p
                onClick={activeClass ? resetFilterAndChips : undefined}
                className={
                    activeClass
                        ? styles['chips-container-reset--blue']
                        : styles['chips-container-reset--grey']
                }
            >
                Reset
            </p>
            {chipItems?.map((chip, index) => (
                <Chip
                    key={index}
                    label={chip.label}
                    onClick={onClick ? () => onClick(index) : undefined}
                    moveChipBackToOriginal={
                        moveChipBackToOriginal ? () => moveChipBackToOriginal(index) : undefined
                    }
                    icon={icon}
                    checkSelected={chip.isSelected}
                />
            ))}
        </div>
    );
};

export default ChipsContent;
