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
    tabs,
    carouselItems,
    photos,
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
                            marginBottom: '20px',
                        }}
                        className={styles['hide-scrollbar']}
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
                        spaceBetween={6}
                        slidesPerView={4}
                        navigation={true}
                    >
                        {cricketMatches.map((match, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    padding: '8px',
                                    background: 'white',
                                    color: 'black',
                                    borderRadius: '10px',
                                }}
                            >
                                <>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap:'4px',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: '12px',
                                                marginLeft: '4px',
                                                fontWeight: 'bold',
                                                color: 'rgb(236, 150, 48)',
                                            }}
                                        >
                                            {match.stumps}
                                        </p>

                                        <p
                                            style={{
                                                fontSize: '10px',
                                                marginLeft: '5px',
                                            }}
                                        >
                                            {match?.match?.matchInfo?.description}
                                        </p>
                                    </div>
                                    {match.match.teams.map((team, teamIndex) => (
                                        <div key={teamIndex}>
                                            <div
                                                className={liveScoreStyles['team-container']}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <div
                                                    className={
                                                        liveScoreStyles['team-container--inner']
                                                    }
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Image
                                                        src={team.flag}
                                                        alt={`${team.name} Flag`}
                                                        width={20}
                                                        height={20}
                                                        style={{ marginRight: '8px' }}
                                                    />
                                                    <p
                                                        className={
                                                            liveScoreStyles['team-container--name']
                                                        }
                                                        style={{
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                        }}
                                                    >
                                                        {team.name}
                                                    </p>
                                                </div>
                                                <div
                                                    style={{ fontWeight: 'bold', fontSize: '13px' }}
                                                >
                                                    {team.score}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <>
                                        {match.textUnderScore && (
                                            <div
                                                style={{
                                                    fontSize: '12px', // Smaller font size for the additional text
                                                    marginTop: '4px', // Margin top to separate it from the score line
                                                    marginBottom: '5px',
                                                }}
                                            >
                                                {match.textUnderScore}
                                            </div>
                                        )}
                                        <div
                                            style={{
                                                borderTop: '1px solid #eee',
                                                fontSize: '12px',
                                                paddingTop: '6px',
                                                gap: '10px',
                                                display: 'flex',
                                            }}
                                        >
                                            <span>Schedule</span>
                                            <span>Table</span>
                                            <span>Report</span>
                                            <span>Series</span>
                                        </div>
                                    </>
                                </>
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
                                        gap: '10px',
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
                            marginBottom='20px'
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

            <div style={{ backgroundColor: 'black', padding: '20px' }}>
                <div
                    style={{
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        maxWidth: '1086px',
                        padding: '40px',
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                color: 'white',
                            }}
                        >
                            <h3 style={{ position: 'relative', right: '30px' }}>Photos</h3>
                            <h4 style={{ color: 'rgb(3, 169, 245)' }}>See All</h4>
                        </div>
                        <div>
                            <div
                                className={styles['images-container']}
                                style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}
                            >
                                {/* First two small images stacked in a column */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}
                                >
                                    {photos.slice(0, 2).map((photo) => (
                                        <Image
                                            key={photo.id}
                                            src={photo.src}
                                            alt={photo.alt}
                                            width={120} // Adjust based on your responsive design
                                            height={120}
                                            className={styles['image-small']}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    ))}
                                </div>

                                {/* Next large image */}
                                <div>
                                    {' '}
                                    {/* This div ensures the large image is in its own row */}
                                    <Image
                                        key={photos[2].id}
                                        src={photos[2].src}
                                        alt={photos[2].alt}
                                        width={420} // Adjust based on your responsive design
                                        height={280}
                                        className={styles['image-large']}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>

                                {/* Next two small images stacked in a column */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}
                                >
                                    {photos.slice(3, 5).map((photo) => (
                                        <Image
                                            key={photo.id}
                                            src={photo.src}
                                            alt={photo.alt}
                                            width={120} // Adjust based on your responsive design
                                            height={120}
                                            className={styles['image-small']}
                                            style={{ borderRadius: '10px' }}
                                        />
                                    ))}
                                </div>

                                {/* Last large image */}
                                <div>
                                    {' '}
                                    {/* This div ensures the last large image is in its own row */}
                                    <Image
                                        key={photos[5].id}
                                        src={photos[5].src}
                                        alt={photos[5].alt}
                                        width={430} // Adjust based on your responsive design
                                        height={300}
                                        className={styles['image-large']}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageContent;
