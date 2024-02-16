'use client';
import React from 'react';
import Card from '../../Molecules/Card/Card';
import { tabDataLiveScores } from '@/app/Utils/Data';
import { useState } from 'react';
import Tabs from '../../Molecules/Tabs/Tabs';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';
import styles from './LiveScoresPage.module.scss';
import { useRouter } from 'next/navigation';
import ChipsContent from '../../Molecules/ChipsContent/ChipsContent';
import ItemDisplayGrid from '../.././Organisms/ItemDisplayGrid/ItemDisplayGrid';
import { dataArray, chips } from '@/app/Utils/Data';

const LiveScores = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataLiveScores[0].label);
    const [chipActive, setChipActive] = useState('');
    const router = useRouter();
    
    const handleTabClick = (tabName: string) => {
        router.push(`/LiveScores?tab=${tabName}`);
    };

    const onClick = (label:string) => {
        setChipActive(label);
    };

    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    tabs={
                        <div
                            className={styles['center__container--tabs']}
                        >
                            <Tabs
                                tabs={tabDataLiveScores}
                                handleTabClick={handleTabClick}
                                onTabSelect={setSelectedLabel}
                                gap='60px'
                                paddingLeft='25px'
                                paddingRight='25px'
                                paddingTop='10px'
                                paddingBottom='10px'
                            />
                        </div>
                    }
                />
                <ChipsContent onClick={onClick} chipActive={chipActive} chips={chips} />
                {selectedLabel === 'Live Cricket Score' && (
                    <Card
                        headerText={<h3 className={styles['card-header--small']}>Top Stories</h3>}
                        paddingBottom='10px'
                        showContent={<ItemDisplayGrid data={dataArray} />}
                    />
                )}
            </div>
        </>
    );
};

export default LiveScores;
