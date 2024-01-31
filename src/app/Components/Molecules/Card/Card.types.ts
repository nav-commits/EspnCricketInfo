import React from "react";

type Tabs = {
    label: string;
    content: string;
};
export interface CardProps {
    headerText: React.ReactNode;
    tabs: React.ReactNode;

}
