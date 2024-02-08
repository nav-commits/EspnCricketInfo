'use client';
import React from 'react';
import ScrollBar from '../Organisms/ScrollBarContent/ScrollBar';
import styles from '../Views/HomPageContent.module.scss';
import Card from '../Molecules/Card/Card';
import Tabs from '../Molecules/Tabs/Tabs';
import { useState } from 'react';
import MatchHighlight from '../Organisms/MatchHightlight/MatchHightlight';
import useResponsive from '@/app/Utils/UseResponsiveHook';
import ImageVideoIcon from '../Atoms/ImageVideoIcon/ImageVideoIcon';
import { tabData, slides, dataArray } from '@/app/Utils/Data';
import ImageCarousel from '../Molecules/ImageCarousel/ImageCarousel';
import ItemDisplayGrid from '../Organisms/ItemDisplayGrid/ItemDisplayGrid';

const HomepageContent: React.FC = () => {
    const { isDesktop } = useResponsive();
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
                        view={isDesktop ? 'row' : 'column'}
                        imageVideoIcon={
                            <ImageVideoIcon
                                width='55px'
                                height='55px'
                                top={isDesktop ? '170px' : '120px'}
                                left={isDesktop ? '10px' : '10px'}
                            />
                        }
                        width={isDesktop ? 420 : 310}
                        height={isDesktop ? 250 : 200}
                    />
                );

            case 'Ind vs Eng':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375209.6.jpg'
                        alt='Ind vs Eng Highlights'
                        title='India battles England in a day full of surprises'
                        description='Highlights and key moments from the India vs England match.'
                        view={isDesktop ? 'row' : 'column'}
                        imageVideoIcon={
                            <ImageVideoIcon
                                width='55px'
                                height='55px'
                                top={isDesktop ? '170px' : '120px'}
                                left={isDesktop ? '10px' : '10px'}
                            />
                        }
                        width={isDesktop ? 420 : 310}
                        height={isDesktop ? 250 : 200}
                    />
                );

            case 'SL vs Afg':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375213.6.jpg'
                        alt='SL vs Afg Highlights'
                        title='Sri Lanka faces Afghanistan in an intense clash'
                        description='Catch all the action from the Sri Lanka vs Afghanistan game.'
                        view={isDesktop ? 'row' : 'column'}
                        imageVideoIcon={
                            <ImageVideoIcon
                                width='55px'
                                height='55px'
                                top={isDesktop ? '170px' : '120px'}
                                left={isDesktop ? '10px' : '10px'}
                            />
                        }
                        width={isDesktop ? 420 : 310}
                        height={isDesktop ? 250 : 200}
                    />
                );

            case 'Ind A vs Lions':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375100/375190.6.jpg'
                        alt='Ind A vs Lions Highlights'
                        title='India A vs Lions: A Test of Future Stars'
                        description='Emerging talents from India A and Lions go head-to-head.'
                        view={isDesktop ? 'row' : 'column'}
                        imageVideoIcon={
                            <ImageVideoIcon
                                width='55px'
                                height='55px'
                                top={isDesktop ? '170px' : '120px'}
                                left={isDesktop ? '10px' : '10px'}
                            />
                        }
                        width={isDesktop ? 420 : 310}
                        height={isDesktop ? 250 : 200}
                    />
                );

            case 'ILT20':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375215.6.jpg'
                        alt='ILT20 Highlights'
                        title="Highlights from the ILT20: Cricket's Newest Extravaganza"
                        description='The best moments and performances from the inaugural ILT20 league.'
                        view={isDesktop ? 'row' : 'column'}
                        imageVideoIcon={
                            <ImageVideoIcon
                                width='55px'
                                height='55px'
                                top={isDesktop ? '170px' : '120px'}
                                left={isDesktop ? '10px' : '10px'}
                            />
                        }
                        width={isDesktop ? 420 : 310}
                        height={isDesktop ? 250 : 200}
                    />
                );

            default:
                return null;
        }
    };
    return (
        <>
            <ScrollBar />
            <div
                className={`${styles['flex__container']} ${
                    isDesktop ? styles['flex-row'] : styles['flex-column']
                }`}
            >
                <div>
                    <Card
                        headerText={<h2 className={styles['card-header']}>Match Coverage</h2>}
                        tabs={<Tabs tabs={tabData} onTabSelect={setSelectedLabel} />}
                        width={isDesktop ? '800px' : ''}
                        showContent={() => renderView(selectedLabel)}
                        paddingBottom='10px'
                    />
                    <Card
                        headerText={<h3 className={styles['card-header--small']}>Top Stories</h3>}
                        width={isDesktop ? '800px' : ''}
                        paddingBottom='10px'
                        showContent={<ItemDisplayGrid data={dataArray} />}
                    />
                </div>

                <Card
                    headerText={
                        <div className={styles['header-text__container']}>
                            <h4>Must Watch</h4>
                            <p className={styles['header-text--style']}>See All</p>
                        </div>
                    }
                    width='300px'
                    height='300px'
                    showContent={<ImageCarousel slides={slides} />}
                />
            </div>
        </>
    );
};

export default HomepageContent;
