'use client';
import React, { useState } from 'react';
import Card from '@/app/Components/Molecules/Card';
import Tabs from '@/app/Components/Molecules/Tabs';
import { tabDataMatch } from '@/app/Utils/Data';
import Image from 'next/image';
import styles from '../[matchid]/MatchPage.module.scss';
import NavBarContent from '@/app/Components/Organisms/NavBarContent/NavBarContent';
import { useEffect } from 'react';

interface MatchProps {
    searchParams: any;
}
const Match: React.FC<MatchProps> = ({ searchParams }) => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataMatch[0].label);
    let data = JSON.parse(searchParams.endOfOverSummary);

    useEffect(() => {
        console.log(searchParams.commentary);
    }, []);
    
    
    const handleTabSelect = (label: string) => {
        setSelectedLabel(label);
    };
    const renderTabContent = () => {
        switch (selectedLabel) {
            case 'Live':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'Scoreboard':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );

            case 'Report':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );

            case 'Commentary':
                return (
                    <>
                        <div style={{ backgroundColor: 'rgba(3, 169, 244, 0.2)' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    padding: '8px',
                                    borderLeft: '4px solid rgb(3, 169, 244)',
                                    backgroundColor: 'rgba(3, 169, 244, 0.2)',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: '2px',
                                        paddingLeft: '32px',
                                        width: '50%',
                                        fontSize: '14px',
                                    }}
                                >
                                    <span
                                        style={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                                    >
                                        end of over {data.over}
                                    </span>
                                    <span>{data.runs} Run</span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: '2px',
                                        paddingLeft: '8px',
                                        paddingRight: '5px',
                                        width: '50%',
                                        fontSize: '14px',
                                    }}
                                >
                                    <span style={{ fontWeight: 'bold' }}>
                                        AUS: {data.total_runs}/{data.wickets}
                                    </span>
                                    <span>CRR: {data.current_run_rate}</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    backgroundColor: 'rgba(3, 169, 244, 0.1)',
                                    display: 'flex',
                                }}
                            >
                                <div
                                    style={{
                                        width: '50%',
                                        paddingLeft: '42px',
                                        padding: '8px',
                                        paddingTop: '13px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        fontSize: '12px',
                                        color: 'light grey',
                                    }}
                                >
                                    <span>{data.batsman_at_crease && data.batsman_at_crease}</span>
                                    <span>
                                        {data.runs_scored_by_batsman_at_crease} (
                                        {data.balls_faced_by_batsman_at_crease}b{' '}
                                        {data.fours_by_batsman_at_crease}x4)
                                    </span>
                                </div>

                                <div
                                    style={{
                                        width: '50%',
                                        borderLeft: '1px solid grey',
                                        paddingRight: '44px',
                                        padding: '1px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '12px',
                                        color: 'light grey',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '1px',
                                            paddingRight: '10px',
                                            paddingLeft: '10px',
                                        }}
                                    >
                                        <p>{data.bowler_stats_over_one}</p>
                                        <p>{data.bowler_number_one}</p>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '1px',
                                            paddingRight: '10px',
                                            paddingLeft: '10px',
                                        }}
                                    >
                                        <p>{data.bowler_stats_over_two}</p>
                                        <p>{data.bowler_number_two}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Live Stats':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'News':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'Photos':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );

            case 'Playing XI':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'Bet':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    showContentTop={
                        <>
                            <div style={{ borderBottom: '1px solid rgb(237, 238, 240)', padding:'20px' }}>
                                <div>
                                    <div>
                                        <p className={styles['grid-item--header']}>
                                            {searchParams.name}
                                        </p>
                                        <p className={styles['grid-item--description']}>
                                            {searchParams.description}
                                        </p>
                                    </div>
                                    <div className={styles['team-container']}>
                                        <div className={styles['team-container--inner']}>
                                            <Image
                                                src={searchParams.flag}
                                                alt={'Team Flag'}
                                                width={40}
                                                height={40}
                                                style={{
                                                    marginRight: '8px',
                                                }}
                                            />

                                            <p className={styles['team-container--name']}>
                                                {searchParams.team1}
                                            </p>
                                        </div>
                                        <p>{searchParams.score1}</p>
                                    </div>

                                    <div className={styles['team-container']}>
                                        <div className={styles['team-container--inner']}>
                                            <Image
                                                src={searchParams.flag2}
                                                alt={'Team Flag Two'}
                                                width={40}
                                                height={40}
                                                style={{
                                                    marginRight: '8px',
                                                }}
                                            />

                                            <p className={styles['team-container--name']}>
                                                {searchParams.team2}
                                            </p>
                                        </div>
                                        <p>{searchParams.score2}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles['grid-item--match-day']}>
                                        {searchParams.day}
                                    </p>
                                    <p className={styles['grid-item--content']}>
                                        {searchParams.additionalContent}
                                    </p>
                                </div>
                            </div>
                        </>
                    }
                    tabs={
                        <div>
                            <Tabs
                                tabs={tabDataMatch}
                                onTabSelect={handleTabSelect}
                                paddingTop='10px'
                                paddingLeft='2px'
                                paddingBottom='5px'
                                gap='10px'
                            />
                        </div>
                    }
                />
                <Card paddingBottom='10px' showContentBelow={renderTabContent()} />
            </div>
        </>
    );
};

export default Match;
