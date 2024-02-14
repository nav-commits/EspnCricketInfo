'use client';
import React, { useState } from 'react';
import Tab from '../../Atoms/Tab/Tab';
import { TabsProps } from './Tabs.types';
import styles from './Tabs.module.scss';
import { BorderBottom } from '@mui/icons-material';

const Tabs: React.FC<TabsProps> = ({ tabs, onTabSelect, borderBottom }) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabSelect = (index: number) => {
        setActiveTab(index);
        onTabSelect(tabs[index].label);
    };

    return (
        <div className={styles.tabs__container} style={{borderBottom: borderBottom}}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    index={index}
                    label={tab.label}
                    content={tab.content || ''}
                    activeTab={activeTab}
                    onClick={() => handleTabSelect(index)}
                />
            ))}
        </div>
    );
};

export default Tabs;
