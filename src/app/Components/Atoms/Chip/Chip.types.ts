import { ReactNode, MouseEventHandler } from 'react';

type Chip = {
    label: string;
    isSelected?: boolean;
};
export interface ChipProps {
    onClick?: MouseEventHandler<HTMLParagraphElement>;
    chipActive?: Chip[];
    moveChipBackToOriginal?: MouseEventHandler<HTMLParagraphElement>;
    icon?: ReactNode; 
    label?: string;
    index?: number;
    checkSelected?: boolean;
}
