type DropdownItem = {
    label: string;
    url: string;
};

export interface DropdownProps {
    items: DropdownItem[];
}