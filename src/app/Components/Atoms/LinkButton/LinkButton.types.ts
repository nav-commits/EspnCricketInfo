import { ReactNode } from 'react';

export interface linkProps {
    text: string;
    icon?: ReactNode;
    isDesktop?: boolean;
    href?: string;
}