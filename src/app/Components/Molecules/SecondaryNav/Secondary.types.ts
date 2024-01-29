type SecondaryItem = {
    type: 'icon' | 'text';
    value: string | React.ElementType;
};

export interface SecondaryNavProps {
    items: SecondaryItem[];
}