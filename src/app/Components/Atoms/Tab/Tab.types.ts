export type TabProps = {
    index: number;
    label: string;
    activeTab: number;
    content: string;
    onClick: (index: number) => void;
    borderBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
};
