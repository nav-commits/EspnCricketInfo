type Chip = {
    label: string;
}
export interface ChipContentProps {
    onClick?: (label:string) => void;
    chipActive?: string;
    label?: string;
    chips?: Chip[];

}
