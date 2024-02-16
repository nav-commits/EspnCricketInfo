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
import { dataArray, chips, cricketMatches } from '@/app/Utils/Data';
import Image from 'next/image';

const LiveScores = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataLiveScores[0].label);
    const [chipActive, setChipActive] = useState('');
    const router = useRouter();

    const handleTabClick = (tabName: string) => {
        router.push(`/LiveScores?tab=${tabName}`);
    };

    const onClick = (label: string) => {
        setChipActive(label);
    };

    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    tabs={
                        <div className={styles['center__container--tabs']}>
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
                        headerText={
                            <h3 className={styles['card-header--small']}>Live Cricket Matches</h3>
                        }
                        paddingBottom='10px'
                        showContent={
                            <ItemDisplayGrid
                                data={
                                    <>
                                        {cricketMatches.map((cricketMatch, index) => (
                                            <div className={styles['grid-item']} key={index}>
                                                <div>
                                                    <div>
                                                        <p>{cricketMatch.stumps}</p>
                                                        <p
                                                            className={
                                                                styles['grid-item--text-style']
                                                            }
                                                        >
                                                            {
                                                                cricketMatch.match.matchInfo
                                                                    .description
                                                            }
                                                        </p>
                                                    </div>

                                                    <div>
                                                        {cricketMatch.match.teams &&
                                                            cricketMatch.match.teams.map(
                                                                (team, index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            {/* <Image
                                                                            src={team.flag} // Changed from team.logo to team.flag
                                                                            alt={'Team Flag'} // Changed the alt text to 'Team Flag'
                                                                            width={50}
                                                                            height={50}
                                                                            style={{
                                                                                borderRadius:
                                                                                    '10px',
                                                                                marginRight: '20px',
                                                                            }}
                                                                        /> */}
                                                                            <div
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    flexDirection:
                                                                                        'row',
                                                                                    justifyContent:
                                                                                        'space-between',
                                                                                    gap: '50px',
                                                                                }}
                                                                            >
                                                                                <p>{team.name}</p>
                                                                                <p>{team.score}</p>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                    <p style={{ borderBottom: '1px solid black' }}>
                                                        {cricketMatch.additionalContent}
                                                    </p>
                                                    <p>{cricketMatch.day}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                }
                            />
                        }
                    />
                )}
            </div>
        </>
    );
};

export default LiveScores;
