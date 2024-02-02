
export type TabData = {
    label: string;
    content: string; 
};

export type TabsProps = {
    tabs: TabData[];
    onTabSelect: (label: string) => void;
};
