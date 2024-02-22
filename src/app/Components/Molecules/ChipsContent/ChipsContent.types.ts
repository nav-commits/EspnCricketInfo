type Chip = {
    label: string;
    isSelected?: boolean;
}
export interface ChipContentProps {
    onClick?: (index:number) => void;
    chipItems?: Chip[];
    label?: string;
    moveChipBackToOriginal?: (index: number) => void;
    icon?: React.ReactNode;
    resetFilterAndChips?: () => void;
    activeClass?: boolean;

}
