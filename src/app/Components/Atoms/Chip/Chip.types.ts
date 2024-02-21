import { ReactNode, MouseEventHandler } from 'react';
export interface ChipProps {
    onClick?: MouseEventHandler<HTMLParagraphElement>;
    moveChipBackToOriginal?: MouseEventHandler<HTMLParagraphElement>;
    icon?: ReactNode; 
    label?: string;
    checkSelected?: boolean;
}
