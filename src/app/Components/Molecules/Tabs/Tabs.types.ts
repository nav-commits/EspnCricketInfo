type TabData = {
    label: string;
    content?: string;
};

export interface TabsProps {
    tabs?: TabData[];
    onTabSelect?: (label: string) => void;
    borderBottom?: string;
    handleTabClick?: (tabName: string) => void;
    currentTab?: boolean;
    gap?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
}
