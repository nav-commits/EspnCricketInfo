export type DropdownItem = {
    label: string;
    dropdownItems: string[];
};

export interface DropdownProps {
    dropdown: DropdownItem[];
}