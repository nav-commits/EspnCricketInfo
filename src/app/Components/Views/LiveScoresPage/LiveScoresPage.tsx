'use client';
import React from 'react';
import Card from '../../Molecules/Card/Card';
import { tabDataLiveScores } from '@/app/Utils/Data';
import { useState, useEffect, useRef } from 'react';
import Tabs from '../../Molecules/Tabs/Tabs';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';
import styles from './LiveScoresPage.module.scss';
import { useRouter } from 'next/navigation';
import ChipsContent from '../../Molecules/ChipsContent/ChipsContent';
import ItemDisplayGrid from '../.././Organisms/ItemDisplayGrid/ItemDisplayGrid';
import { chips, cricketMatches, disableRules } from '@/app/Utils/Data';
import Image from 'next/image';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';

const LiveScores = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabDataLiveScores[0].label);
    const [chipItems, setChipItems] = useState(chips);
    const [filterMatches, setFilterMatches] = useState(cricketMatches);
    const [activeClass, setActiveClass] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [navSticky, setNavSticky] = useState(false);
    const stickyRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const handleTabClick = (tabName: string) => {
        router.push(`/LiveScores?tab=${tabName}`);
    };

    const filterSelectedLabel = (chipItem: Array<any>) => {
        let selectedLabels = chipItem.filter((chip) => chip.isSelected).map((chip) => chip.label);
        if (selectedLabels.length > 0) {
            let filterContent = cricketMatches.filter((match) =>
                selectedLabels.every((selectedLabel) =>
                    match.label.some((labelObj) => labelObj.label.includes(selectedLabel))
                )
            );
            setFilterMatches(filterContent);
        }
    };

    const unDisableAndDisableChips = (selectedItem: Array<string>, chips: Array<any>) => {
        const disabledChips = chips.map((chip) => {
            let isDisabled = selectedItem.some((selectedLabel) => {
                if (disableRules[selectedLabel]) {
                    return disableRules[selectedLabel].includes(chip.label);
                }
                return false;
            });

            return { ...chip, disabled: isDisabled };
        });
        setChipItems(disabledChips);
    };

    const activeChip = (index: number) => {
        //  move chips to the front when selected
        const newChips = chipItems.map((chip, i) => {
            if (i === index) {
                return { ...chip, isSelected: !chip.isSelected };
            }
            return chip;
        });
        let moveFrontArray = newChips.splice(index, 1);
        newChips.unshift(moveFrontArray[0]);
        setChipItems(newChips);

        let selectedLabels = newChips.filter((chip) => chip.isSelected).map((chip) => chip.label);

        // filter matches based on selected labels
        filterSelectedLabel(newChips);

        // disable chips based on selected labels
        unDisableAndDisableChips(selectedLabels, newChips);
        setActiveClass(true);
    };

    const moveChipBackToOriginal = (index: number) => {
        //  move back chips to the original position
        const newChips = chipItems.map((chip, i) => ({
            ...chip,
            isSelected: i === index ? false : chip.isSelected,
        }));

        let [removedChip] = newChips.splice(index, 1);
        if (removedChip.label !== "Int'l") {
            let findIndex = chips.findIndex((chip) => chip.label === removedChip.label);
            newChips.splice(findIndex, 0, removedChip);
            let intlIndex = newChips.findIndex((chip) => chip.label === "Int'l");
            if (intlIndex > 0) {
                [newChips[intlIndex], newChips[intlIndex - 1]] = [
                    newChips[intlIndex - 1],
                    newChips[intlIndex],
                ];
            }
        } else {
            newChips.splice(index, 0, removedChip);
        }
        setChipItems(newChips);

        // filter matches based on selected labels
        const selectedLabels = newChips.filter((chip) => chip.isSelected).map((chip) => chip.label);
        if (selectedLabels.length > 0) {
            filterSelectedLabel(newChips);
        } else {
            setFilterMatches(cricketMatches);
        }

        // undisable chips based on selected labels
        unDisableAndDisableChips(selectedLabels, newChips);

        // remove the class on Reset button when one chip is selected
        const selectedChipsCount = newChips.filter((chip) => chip.isSelected).length;
        if (selectedChipsCount === 0) {
            setActiveClass(false);
        }
    };

    const resetFilterAndChips = () => {
        setActiveClass(false);
        setChipItems(chips);
        setFilterMatches(cricketMatches);
    };

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current?.offsetHeight);
        }
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbarStickyThreshold = 20;

            const isNavbarSticky = scrollPosition > navbarStickyThreshold;
            setNavSticky(isNavbarSticky);

            setIsSticky(isNavbarSticky && scrollPosition > navbarHeight + navbarStickyThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarHeight]);

    return (
        <>
            <NavBarContent navSticky={navSticky} navbarRef={navbarRef} />
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
                {selectedLabel === 'Live Cricket Score' && (
                    <>
                        <ChipsContent
                            onClick={activeChip}
                            moveChipBackToOriginal={moveChipBackToOriginal}
                            icon={
                                <CloseOutlinedIcon
                                    style={{ fontSize: '14px', position: 'relative', top: '2px' }}
                                />
                            }
                            chipItems={chipItems}
                            resetFilterAndChips={resetFilterAndChips}
                            activeClass={activeClass}
                            refItem={stickyRef}
                            isSticky={isSticky}
                            navbarHeight={navbarHeight}
                        />
                        <Card
                            headerText={
                                <h3 className={styles['card-header--small']}>
                                    Live Cricket Matches
                                </h3>
                            }
                            paddingBottom='10px'
                            showContentBelow={
                                <ItemDisplayGrid
                                    data={
                                        <>
                                            {filterMatches.length > 0 ? (
                                                filterMatches.map((cricketMatch, index) => (
                                                    <Link
                                                        href={{
                                                            pathname: `/LiveScores/${cricketMatch.id}`,
                                                            query: {
                                                                name: cricketMatch.stumps,
                                                                description:
                                                                    cricketMatch.match.matchInfo
                                                                        .description,
                                                                flag: cricketMatch.match.teams[0]
                                                                    .flag,
                                                                flag2: cricketMatch.match.teams[1].flag,

                                                                team1: cricketMatch.match.teams[0]
                                                                    .name,
                                                                team2: cricketMatch.match.teams[1]
                                                                    .name,
                                                                score1: cricketMatch.match.teams[0]
                                                                    .score,
                                                                score2: cricketMatch.match.teams[1]
                                                                    .score,
                                                                day: cricketMatch.day,
                                                                additionalContent:
                                                                    cricketMatch.additionalContent,
                                                                
                                                            },
                                                        }}
                                                        key={index}
                                                        className={styles['grid-item']}
                                                    >
                                                        <div key={index}>
                                                            <div>
                                                                <div>
                                                                    <p
                                                                        className={
                                                                            styles[
                                                                                'grid-item--header'
                                                                            ]
                                                                        }
                                                                    >
                                                                        {cricketMatch.stumps}
                                                                    </p>
                                                                    <p
                                                                        className={
                                                                            styles[
                                                                                'grid-item--description'
                                                                            ]
                                                                        }
                                                                    >
                                                                        {
                                                                            cricketMatch.match
                                                                                .matchInfo
                                                                                .description
                                                                        }
                                                                    </p>
                                                                </div>

                                                                <>
                                                                    {cricketMatch.match.teams &&
                                                                        cricketMatch.match.teams.map(
                                                                            (team, index) => {
                                                                                return (
                                                                                    <div
                                                                                        className={
                                                                                            styles[
                                                                                                'team-container'
                                                                                            ]
                                                                                        }
                                                                                        key={index}
                                                                                    >
                                                                                        <div
                                                                                            className={
                                                                                                styles[
                                                                                                    'team-container--inner'
                                                                                                ]
                                                                                            }
                                                                                        >
                                                                                            <Image
                                                                                                src={
                                                                                                    team.flag
                                                                                                }
                                                                                                alt={
                                                                                                    'Team Flag'
                                                                                                }
                                                                                                width={
                                                                                                    20
                                                                                                }
                                                                                                height={
                                                                                                    20
                                                                                                }
                                                                                                style={{
                                                                                                    marginRight:
                                                                                                        '8px',
                                                                                                }}
                                                                                            />
                                                                                            <p
                                                                                                className={
                                                                                                    styles[
                                                                                                        'team-container--name'
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    team.name
                                                                                                }
                                                                                            </p>
                                                                                        </div>

                                                                                        <p>
                                                                                            {
                                                                                                team.score
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )}
                                                                </>
                                                                <p
                                                                    className={
                                                                        styles[
                                                                            'grid-item--match-day'
                                                                        ]
                                                                    }
                                                                >
                                                                    {cricketMatch.day}
                                                                </p>
                                                                <p
                                                                    className={
                                                                        styles['grid-item--content']
                                                                    }
                                                                >
                                                                    {cricketMatch.additionalContent}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <p className={styles['no-match']}>No match found</p>
                                            )}
                                        </>
                                    }
                                />
                            }
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default LiveScores;
