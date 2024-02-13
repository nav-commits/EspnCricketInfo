import React from "react";
export interface CardProps {
    headerText?: React.ReactNode;
    tabs?: React.ReactNode;
    showContent?: (() => React.ReactNode) | React.ReactNode; 
    paddingBottom?: string;
    cardSize?: string;
    
}
