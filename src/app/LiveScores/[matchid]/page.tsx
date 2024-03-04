'use client';
import React, { useState } from 'react';
import Card from '@/app/Components/Molecules/Card';
import Tabs from '@/app/Components/Molecules/Tabs';
import { tabDataMatch } from '@/app/Utils/Data';
import Image from 'next/image';
import styles from '../[matchid]/MatchPage.module.scss';
import NavBarContent from '@/app/Components/Organisms/NavBarContent/NavBarContent';
import { useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface MatchProps {
    searchParams: any;
}
const Match: React.FC<MatchProps> = ({ searchParams }) => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataMatch[0].label);
    let data = JSON.parse(searchParams.endOfOverSummary);

    const comments = [
        {
            id: 1,
            score: '46.5',
            commentary: 'Cummins to Mitchell, no run',
            detail: 'full, angling in at off stump, defended towards point',
        },
        {
            id: 2,
            score: '47.0',
            commentary: "Karl: 'NZ 1/3 wickets lost, 1/3 of target scored... things are on track!'",
            detail: '',
        },
        {
            id: 3,
            score: '45.1',
            commentary: 'Starc to Mitchell, FOUR runs',
            detail: 'slashed away! Short and wide, Mitchell takes advantage with a crunching square drive off the back foot',
            highlight: true, // This property is used to determine the styling for highlights
        },
        // Add more comments as needed
    ];

    const navItems = [
        { id: 1, label: 'New', icon: '⇅' }, // Icon is a placeholder
        { id: 2, label: 'NZ 2nd Innings', icon: <KeyboardArrowDownIcon /> }, // Icon placeholder
        { id: 3, label: 'Full commentary', icon: <KeyboardArrowDownIcon /> }, // Icon placeholder
    ];

    const handleTabSelect = (label: string) => {
        setSelectedLabel(label);
    };
    const renderTabContent = () => {
        switch (selectedLabel) {
            case 'Summary':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'Scoreboard':
                return (
                    <div>
                        <p>lScoreboard</p>
                    </div>
                );

            case 'Report':
                return (
                    <div>
                        <p>Report</p>
                    </div>
                );

            case 'Commentary':
                return (
                    <>
                        <div
                            style={{
                                padding: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                {navItems.map((item) => (
                                    <div key={item.id} style={{ display: 'flex' }}>
                                        <span
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: '1px solid #ccc',
                                                height: '24px',
                                                backgroundColor: '#f9f9f9',
                                                color: '#333',
                                                borderRadius: '999px',
                                                cursor: 'pointer',
                                                paddingLeft: '8px',
                                                paddingRight: '12px',
                                                fontSize: '14px',
                                                gap: '4px',
                                            }}
                                        >
                                            {item.label}
                                            <i style={{ fontSize: '20px' }}>{item.icon}</i>{' '}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
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

                        <div>
                            {comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    style={{
                                        padding: '8px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderBottom: '1px solid #ddd',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            padding: '8px',
                                            alignItems: 'start',
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginRight: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    marginRight: '8px',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {comment.score}
                                            </span>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '5px',
                                                    backgroundColor: comment.highlight
                                                        ? '#4CAF50'
                                                        : '#f0f0f0', // green for highlights, otherwise translucent
                                                    color: comment.highlight ? '#fff' : '#000', // white text for highlights, otherwise black
                                                }}
                                            >
                                                <span>{comment.highlight ? '4' : '•'}</span>
                                            </div>
                                        </div>
                                        <div style={{ maxWidth: '730px' }}>
                                            <div style={{ marginLeft: '12px' }}>
                                                <div
                                                    style={{
                                                        marginBottom: '4px',
                                                        fontSize: '13px',
                                                    }}
                                                >
                                                    <span>{comment.commentary}</span>
                                                </div>
                                                <p
                                                    style={{
                                                        margin: 0,
                                                        fontWeight: comment.highlight
                                                            ? 'bold'
                                                            : 'normal',
                                                        fontSize: '13px',
                                                    }}
                                                >
                                                    {comment.detail}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                marginLeft: 'auto',
                                                marginRight: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {/* Button or other interactive element */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            case 'Stats':
                return (
                    <div>
                        <p>live</p>
                    </div>
                );
            case 'Tables':
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

            case 'Videos':
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
                            <div
                                style={{
                                    fontSize: '0.875rem',
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: 'rbg(108, 109, 111)',
                                                padding: '0.5rem',
                                                paddingLeft: '1rem',
                                                paddingRight: '1rem',
                                            }}
                                        >
                                            <p>
                                                <b>RESULT</b>
                                            </p>
                                            <p>
                                                1st Test, Wellington, February 29 - March 03, 2024
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                marginBottom: '0.25rem',
                                            }}
                                        >
                                            {/* Team 1 Score */}
                                            <div
                                                className='ci-team-score'
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '0.25rem',
                                                    borderTop: '1px solid #ccc',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        minWidth: 0,
                                                        marginRight: '1.0rem',
                                                        paddingTop: '0.25rem',
                                                        paddingLeft: '0.5rem',
                                                        paddingRight: '0.5rem',
                                                    }}
                                                >
                                                    <Image
                                                        src={searchParams.flag}
                                                        alt={'Team Flag'}
                                                        width={30}
                                                        height={30}
                                                        style={{
                                                            marginRight: '8px',
                                                        }}
                                                    />

                                                    <span
                                                        style={{
                                                            fontSize: 'larger',
                                                            fontWeight: 'bold',

                                                            display: 'block',
                                                            overflow: 'hidden',

                                                            whiteSpace: 'nowrap',
                                                        }}
                                                    >
                                                        {searchParams.team1}
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        textAlign: 'right',
                                                        whiteSpace: 'nowrap',

                                                        paddingLeft: '0.5rem',
                                                        paddingRight: '0.5rem',
                                                    }}
                                                >
                                                    <strong>
                                                        383<span>&nbsp;&amp;&nbsp;</span>
                                                    </strong>
                                                    <strong>164</strong>
                                                </div>
                                            </div>
                                            {/* Team 2 Score */}
                                            <div
                                                className='ci-team-score'
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    opacity: 0.5,
                                                    marginBottom: '0.25rem',

                                                    paddingLeft: '0.5rem',
                                                    paddingRight: '0.5rem',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        minWidth: 0,
                                                        marginRight: '0.25rem',
                                                    }}
                                                >
                                                    <Image
                                                        src={searchParams.flag2}
                                                        alt={'Team Flag Two'}
                                                        width={30}
                                                        height={30}
                                                        style={{
                                                            marginRight: '8px',
                                                        }}
                                                    />

                                                    <span
                                                        style={{
                                                            fontSize: 'larger',
                                                            fontWeight: 'bold',
                                                            color: 'currentColor',
                                                            display: 'block',
                                                            overflow: 'hidden',

                                                            whiteSpace: 'nowrap',
                                                        }}
                                                    >
                                                        {searchParams.team2}
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        textAlign: 'right',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                >
                                                    <span style={{ marginRight: '0.125rem' }}>
                                                        (T:369)
                                                    </span>
                                                    <strong>
                                                        179<span>&nbsp;&amp;&nbsp;</span>
                                                    </strong>
                                                    <strong>196</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            fontSize: 'smaller',
                                            fontWeight: 'medium',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            padding: '8px',
                                            borderBottom: '1px solid #ccc',
                                        }}
                                    >
                                        <span>Australia won by 172 runs</span>
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
