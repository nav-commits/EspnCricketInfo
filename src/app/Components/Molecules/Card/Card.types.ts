import React from "react";
export interface CardProps {
    headerText?: React.ReactNode;
    tabs?: React.ReactNode;
    width?: string;
    renderView?: () => React.ReactNode;  
    paddingBottom?: string;
    height ?: string

}
