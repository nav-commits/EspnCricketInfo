type Chip = {
    label: string;
    isSelected?: boolean;
}
export interface ChipContentProps {
    onClick?: (index:number) => void;
    chipActive?: Chip[];
    label?: string;
    moveChipBackToOriginal?: (index: number) => void;
    icon?: React.ReactNode;

}
