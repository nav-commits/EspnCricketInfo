'use client';
import React from 'react';
import ScrollBar from '../../Organisms/ScrollBarContent/ScrollBar';
import styles from '../../Views/HomePage/HomePage.module.scss';
import Card from '../../Molecules/Card/Card';
import Tabs from '../../Molecules/Tabs/Tabs';
import { useState } from 'react';
import MatchHighlight from '../../Organisms/MatchHightlight/MatchHightlight';
import ImageVideoIcon from '../../Atoms/ImageVideoIcon/ImageVideoIcon';
import {
    tabData,
    slides,
    dataArray,
    matchHighlights,
    cricketMatches,
    trendingPlayers,
} from '@/app/Utils/Data';
import ImageCarousel from '../../Molecules/ImageCarousel/ImageCarousel';
import ItemDisplayGrid from '../../Organisms/ItemDisplayGrid/ItemDisplayGrid';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';
import Image from 'next/image';
import liveScoreStyles from '../../Views/LiveScoresPage/LiveScoresPage.module.scss';
import LinkButton from '../../Atoms/LinkButton/LinkButton';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomepageContent: React.FC = () => {
    const [selectedLabel, setSelectedLabel] = useState(tabData[0].label);
    const renderView = (label: string) => {
        switch (label) {
            case 'Aus vs WI':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='Aus vs WI Highlights'
                        title='Australia takes on West Indies in a thrilling match'
                        description='A detailed recap of the match between Australia and West Indies.'
                        imageVideoIcon={<ImageVideoIcon width='55px' height='55px' />}
                    />
                );

            case 'Ind vs Eng':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375209.6.jpg'
                        alt='Ind vs Eng Highlights'
                        title='India battles England in a day full of surprises'
                        description='Highlights and key moments from the India vs England match.'
                        imageVideoIcon={<ImageVideoIcon width='55px' height='55px' />}
                    />
                );

            case 'SL vs Afg':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375213.6.jpg'
                        alt='SL vs Afg Highlights'
                        title='Sri Lanka faces Afghanistan in an intense clash'
                        description='Catch all the action from the Sri Lanka vs Afghanistan game.'
                        imageVideoIcon={<ImageVideoIcon width='55px' height='55px' />}
                    />
                );

            case 'Ind A vs Lions':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375100/375190.6.jpg'
                        alt='Ind A vs Lions Highlights'
                        title='India A vs Lions: A Test of Future Stars'
                        description='Emerging talents from India A and Lions go head-to-head.'
                        imageVideoIcon={<ImageVideoIcon width='55px' height='55px' />}
                    />
                );

            case 'ILT20':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375215.6.jpg'
                        alt='ILT20 Highlights'
                        title="Highlights from the ILT20: Cricket's Newest Extravaganza"
                        description='The best moments and performances from the inaugural ILT20 league.'
                        imageVideoIcon={<ImageVideoIcon width='55px' height='55px' />}
                    />
                );

            default:
                return null;
        }
    };

    const tabs = [
        { name: 'Matches', count: 26 },
        { name: 'AFG v IRE', count: 1 },
        { name: 'BPL 2024', count: 1 },
        { name: 'WPL', count: 2 },
        { name: 'NZ v AUS', count: 1 },
        { name: 'WCL 2', count: 1 },
        { name: 'Sheffield Shield', count: 3 },
        { name: 'Plunket Shield', count: 3 },
        { name: 'Durham in ZIM', count: 1 },
        { name: 'CSA 4-Day DIV1', count: 1 },
        { name: 'CWC Play-off', count: 3 },
        { name: 'Nepal Tri-Nation', count: 2 },
        { name: 'Dang CL', count: 3 },
        { name: 'Ranji Trophy', count: 2 },
        { name: 'PSL 2024', count: 2 },
    ];

    const carouselItems = [
        {
            src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/374900/374946.6.jpg',
            alt: 'MAR 01',

            description: 'India vs England has been a tale of two very good captains',
        },

        {
            src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
            alt: 'MAR 01',

            description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
        },
        {
            src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
            alt: 'MAR 01',

            description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
        },
        {
            src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
            alt: 'MAR 01',

            description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
        },
    ];

    return (
        <>
            <div style={{ backgroundColor: '#0298DB' }}>
                <div
                    style={{
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        padding: '10px',
                        maxWidth: '1200px',
                    }}
                    className={styles['scores__tab-container']}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '5px',
                        }}
                    >
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                style={{
                                    flexShrink: 0,
                                    marginRight: index === tabs.length - 1 ? '0' : '5px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    maxWidth: '1200px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '12px',
                                        color: 'white',
                                    }}
                                >
                                    {tab.name} <span>({tab.count})</span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={5} // Small gap between cards
                        slidesPerView={4} // Adjust based on your layout requirements
                        navigation={true}
                    >
                        {cricketMatches.map((match, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    width={'290px'}
                                    showContentBelow={
                                        <>
                                            <div>
                                                <p
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'rgb(236, 150, 48)',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {match.stumps}
                                                </p>
                                                <p
                                                    style={{ fontSize: '12px' }}
                                                    className={liveScoreStyles['grid-item--header']}
                                                >
                                                    {match.match.matchInfo.description}
                                                </p>
                                            </div>
                                            {match.match.teams.map((team, teamIndex) => (
                                                <div
                                                    key={teamIndex}
                                                    className={liveScoreStyles['team-container']}
                                                    style={{ fontSize: '12px' }} // Consider moving inline styles to CSS classes for maintainability
                                                >
                                                    <div
                                                        className={
                                                            liveScoreStyles['team-container--inner']
                                                        }
                                                    >
                                                        <Image
                                                            src={team.flag}
                                                            alt={`${team.name} Flag`}
                                                            width={15}
                                                            height={15}
                                                            style={{ marginRight: '8px' }}
                                                        />
                                                        <p
                                                            style={{ fontSize: '12px' }}
                                                            className={
                                                                liveScoreStyles[
                                                                    'team-container--name'
                                                                ]
                                                            }
                                                        >
                                                            {team.name}
                                                        </p>
                                                    </div>
                                                    <p>{team.score}</p>
                                                </div>
                                            ))}
                                        </>
                                    }
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <NavBarContent />
            <div className={styles['center__container']}>
                <ScrollBar />
                <div className={styles['flex__container']}>
                    <div>
                        <Card
                            headerText={<h2 className={styles['card-header']}>Match Coverage</h2>}
                            tabs={
                                <Tabs
                                    tabs={tabData}
                                    onTabSelect={setSelectedLabel}
                                    borderBottom='1px solid rgb(237, 238, 240)'
                                    gap='25px'
                                />
                            }
                            showContentBelow={() => renderView(selectedLabel)}
                            paddingBottom='10px'
                        />
                        <Card
                            headerText={
                                <h3 className={styles['card-header--small']}>Top Stories</h3>
                            }
                            paddingBottom='10px'
                            showContentBelow={
                                <ItemDisplayGrid
                                    data={
                                        <>
                                            {dataArray.map((item, index) => (
                                                <div className={styles['grid-item']} key={index}>
                                                    <Image
                                                        src={item.imgSrc}
                                                        alt={'Content'}
                                                        width={180}
                                                        height={100}
                                                        style={{
                                                            borderRadius: '10px',
                                                            marginRight: '20px',
                                                        }}
                                                    />
                                                    <p>{item.content}</p>
                                                </div>
                                            ))}
                                        </>
                                    }
                                />
                            }
                        />
                        <Card
                            headerText={
                                <div className={styles['header-text__container']}>
                                    <h4>Editor’s Picks</h4>
                                    <p className={styles['header-text--style']}>See All</p>
                                </div>
                            }
                            paddingBottom='10px'
                            showContentBelow={
                                <div>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={5}
                                        slidesPerView={3}
                                        navigation={true}
                                    >
                                        {carouselItems.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div
                                                    style={{
                                                        padding: '10px',
                                                        maxWidth: '600px',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: 'relative',
                                                            paddingBottom: '56.25%', // Aspect ratio for 16:9
                                                            height: 0,

                                                            margin: 'auto',
                                                        }}
                                                    >
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            layout='fill'
                                                            objectFit='cover'
                                                            style={{
                                                                borderRadius: '10px 10px 0 0',
                                                                cursor: 'pointer',
                                                                transition:
                                                                    'transform .5s ease-in-out',
                                                            }}
                                                            className='hover:scale-110'
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            padding: '10px',
                                                            backgroundColor: 'black',
                                                            color: 'white',
                                                            textAlign: 'left',
                                                            borderRadius: '0 0 5px 5px',
                                                            height: '80px',
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                margin: 0,
                                                                fontSize: '12px',
                                                                marginTop: '5px',
                                                            }}
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            }
                        />

                        <Card
                            headerText={
                                <div className={styles['header-text__container']}>
                                    <h4>Trending Players</h4>
                                </div>
                            }
                            showContentBelow={
                                <div
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        padding: '10px',
                                        gap:'10px',
                                        fontSize: '12px',
                                    }}
                                >
                                    {trendingPlayers.map((button: any, index: number) => (
                                        <LinkButton
                                            key={index}
                                            text={button.text}
                                            icon={button.icon}
                                        />
                                    ))}
                                </div>
                            }
                            paddingBottom='10px'
                        />

                        <div className={styles['show-container']}>
                            <div className={styles['header-text__container']}>
                                <h4>Must Watch</h4>
                                <p className={styles['header-text--style']}>See All</p>
                            </div>
                            <div className={styles['scroll-container']}>
                                <div className={styles['match-highlights-flex-container']}>
                                    {matchHighlights.map((highlight, index) => (
                                        <MatchHighlight
                                            key={index}
                                            src={highlight.src}
                                            alt={highlight.alt}
                                            imageVideoIcon={
                                                <ImageVideoIcon width='55px' height='55px' />
                                            }
                                            subTitle={highlight.subTitle}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={styles['card-on-desktop']}>
                            <Card
                                headerText={
                                    <div className={styles['header-text__container']}>
                                        <h4>Must Watch</h4>
                                        <p className={styles['header-text--style']}>See All</p>
                                    </div>
                                }
                                cardSize='must-watch'
                                showContentBelow={<ImageCarousel slides={slides} />}
                            />
                        </div>
                        <div className={styles['card-on-desktop']}>
                            <Card
                                headerText={
                                    <div className={styles['header-text__container']}>
                                        <h4>On This Day</h4>
                                        <p className={styles['header-text--style']}>See All</p>
                                    </div>
                                }
                                cardSize='must-watch'
                                showContentBelow={
                                    <div style={{ padding: '10px' }}>
                                        <div
                                            style={{
                                                position: 'relative',
                                                paddingBottom: '56.25%',
                                                height: 0,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Image
                                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/259200/259294.9.jpg'
                                                alt='MAR 01'
                                                layout='fill'
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '10px 10px 0 0',
                                                    cursor: 'pointer',

                                                    transition: 'transform .5s ease-in-out',
                                                }}
                                                className='hover:scale-110'
                                            />
                                        </div>
                                        <div
                                            style={{
                                                padding: '10px', // Adjust padding as needed
                                                backgroundColor: 'black', // For the background color of the text area
                                                color: 'white', // For the text color
                                                textAlign: 'left', // Aligns text to the left
                                            }}
                                        >
                                            <h4 style={{ margin: 0 }}>MAR 01</h4>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontSize: '10px',
                                                    marginTop: '10px',
                                                }}
                                            >
                                                Happy birthday, Shahid Afridi
                                            </p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageContent;
