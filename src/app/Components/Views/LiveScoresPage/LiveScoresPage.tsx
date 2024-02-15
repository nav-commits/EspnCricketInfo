'use client';
import React from 'react';
import Card from '../../Molecules/Card/Card';
import { tabDataLiveScores } from '@/app/Utils/Data';
import { useState } from 'react';
import Tabs from '../../Molecules/Tabs/Tabs';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';
import styles from './LiveScoresPage.module.scss';
import { useRouter } from 'next/navigation';

const LiveScores = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataLiveScores[0].label);
    const router = useRouter();
    const handleTabClick = (tabName: string) => {
        router.push(`/LiveScores?tab=${tabName}`);
    };
    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    tabs={
                        <div
                            style={{
                                fontSize: '17px',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Tabs
                                tabs={tabDataLiveScores}
                                handleTabClick={handleTabClick}
                                onTabSelect={setSelectedLabel}
                                gap='60px'
                                paddingLeft='25px'
                                paddingRight='25px'
                                paddingTop='20px'
                                paddingBottom='10px'
                            />
                        </div>
                    }
                />
            </div>
        </>
    );
};

export default LiveScores;
