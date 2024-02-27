import React from 'react';
import styles from './Chip.module.scss';
import { ChipProps } from './Chip.types';

const Chip: React.FC<ChipProps> = ({
    label,
    onClick,
    moveChipBackToOriginal,
    icon,
    checkSelected,
    disabledStatus,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        if (checkSelected || disabledStatus) {
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
                        opacity: disabledStatus ? 0.5 : 1,
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
                    {checkSelected && !disabledStatus ? (
                        <span className={styles['chip-icon']} onClick={moveChipBackToOriginal}>
                            {icon}
                        </span>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default Chip;
