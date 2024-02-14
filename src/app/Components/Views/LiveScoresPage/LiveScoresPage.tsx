'use client';
import React from 'react';
import Card from '../../Molecules/Card/Card';
import { tabDataLiveScores } from '@/app/Utils/Data';
import { useState } from 'react';
import Tabs from '../../Molecules/Tabs/Tabs';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';
import styles from './LiveScoresPage.module.scss';

const LiveScores = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataLiveScores[0].label);
    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    padding='10px'
                    tabs={
                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Tabs tabs={tabDataLiveScores} onTabSelect={setSelectedLabel} />
                        </div>
                    }
                />
            </div>
        </>
    );
};

export default LiveScores;
