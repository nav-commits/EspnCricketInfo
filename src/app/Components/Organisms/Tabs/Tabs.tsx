'use client';
import React, { useState } from 'react';
import Tab from '../../Atoms/Tab/Tab';
import { TabsProps } from './Tabs.types';
import styles from './Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className={styles.tabs__container}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    index={index}
                    label={tab.label}
                    content={tab.content}
                    activeTab={activeTab}
                    onClick={setActiveTab}
                />
            ))}
        </div>
    );
};

export default Tabs;
