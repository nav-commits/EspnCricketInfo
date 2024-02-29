import React from "react";
export interface CardProps {
    headerText?: React.ReactNode;
    tabs?: React.ReactNode;
    showContentBelow?: (() => React.ReactNode) | React.ReactNode;
    paddingBottom?: string;
    cardSize?: string;
    padding?: string;
    showContentTop?: React.ReactNode;
}
