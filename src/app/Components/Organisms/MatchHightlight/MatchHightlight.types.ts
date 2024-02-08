export interface MatchHighlightProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    view?: 'row' | 'column';
    imageVideoIcon: React.ReactNode;
    isDesktop?: boolean;
    width?: number;
    height?: number;
}
