'use client';
import React from 'react';
import ScrollBar from '../../Organisms/ScrollBarContent/ScrollBar';
import styles from '../../Views/HomePage/HomePage.module.scss';
import Card from '../../Molecules/Card/Card';
import Tabs from '../../Molecules/Tabs/Tabs';
import { useState } from 'react';
import MatchHighlight from '../../Organisms/MatchHightlight/MatchHightlight';
import ImageVideoIcon from '../../Atoms/ImageVideoIcon/ImageVideoIcon';
import { tabData, slides, dataArray, matchHighlights } from '@/app/Utils/Data';
import ImageCarousel from '../../Molecules/ImageCarousel/ImageCarousel';
import ItemDisplayGrid from '../../Organisms/ItemDisplayGrid/ItemDisplayGrid';
import NavBarContent from '../../Organisms/NavBarContent/NavBarContent';

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
            <div style={{ backgroundColor: '#0298DB', padding: '80px' }} />
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
                            showContent={() => renderView(selectedLabel)}
                            paddingBottom='10px'
                        />
                        <Card
                            headerText={
                                <h3 className={styles['card-header--small']}>Top Stories</h3>
                            }
                            paddingBottom='10px'
                            showContent={<ItemDisplayGrid data={dataArray} />}
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

                    <div className={styles['card-on-desktop']}>
                        <Card
                            headerText={
                                <div className={styles['header-text__container']}>
                                    <h4>Must Watch</h4>
                                    <p className={styles['header-text--style']}>See All</p>
                                </div>
                            }
                            cardSize='must-watch'
                            showContent={<ImageCarousel slides={slides} />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageContent;
