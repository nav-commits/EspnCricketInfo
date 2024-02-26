type Chip = {
    label: string;
    isSelected?: boolean;
    disabled?: boolean; 
}
export interface ChipContentProps {
    onClick?: (index:number) => void;
    chipItems?: Chip[];
    label?: string;
    moveChipBackToOriginal?: (index: number) => void;
    icon?: React.ReactNode;
    resetFilterAndChips?: () => void;
    activeClass?: boolean;
    disabledStatus?: boolean;

}
