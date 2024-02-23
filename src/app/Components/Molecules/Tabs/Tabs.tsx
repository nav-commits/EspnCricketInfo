'use client';
import React, { useState } from 'react';
import Tab from '../../Atoms/Tab/Tab';
import { TabsProps } from './Tabs.types';
import styles from './Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({ tabs, onTabSelect, borderBottom, handleTabClick, gap, paddingLeft,paddingRight, paddingTop , paddingBottom}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabSelect = (index: number) => {
        setActiveTab(index);
        onTabSelect(tabs[index].label);
        if (handleTabClick) {
            handleTabClick(tabs[index].label);
        }
    };

    return (
        <div className={styles.tabs__container} style={{ borderBottom: borderBottom, gap: gap }}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    index={index}
                    label={tab.label}
                    content={tab.content || ''}
                    activeTab={activeTab}
                    onClick={() => handleTabSelect(index)}
                    paddingLeft={paddingLeft}
                    paddingRight={paddingRight}
                    paddingTop={paddingTop}
                    paddingBottom={paddingBottom}
                />
            ))}
        </div>
    );
};

export default Tabs;
