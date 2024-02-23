import React from 'react';
import styles from './Chip.module.scss';
import { ChipProps } from './Chip.types';

const Chip: React.FC<ChipProps> = ({
    label,
    onClick,
    moveChipBackToOriginal,
    icon,
    checkSelected,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        if (checkSelected) {
            e.stopPropagation();
            return;
        }
        onClick?.(e);
    };
    return (
        <>
            {label && (
                <div
                    style={{
                        backgroundColor: checkSelected ? '#03A9F4' : '',
                        color: checkSelected ? 'white' : '',
                    }}
                    className={styles['chip']}
                >
                    {label && (
                        <span
                            className={`${styles['chip-text']} ${
                                checkSelected ? styles['chip-text-selected'] : ''
                            }`}
                            onClick={handleClick}
                        >
                            {label}
                        </span>
                    )}
                    {checkSelected && (
                        <span className={styles['chip-icon']} onClick={moveChipBackToOriginal}>
                            {icon}
                        </span>
                    )}
                </div>
            )}
        </>
    );
};

export default Chip;
