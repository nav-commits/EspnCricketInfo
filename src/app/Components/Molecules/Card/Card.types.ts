import React from "react";
export interface CardProps {
    headerText?: React.ReactNode;
    tabs?: React.ReactNode;
    width?: string;
    showContent?: (() => React.ReactNode) | React.ReactNode; 
    paddingBottom?: string;
    height ?: string
}
