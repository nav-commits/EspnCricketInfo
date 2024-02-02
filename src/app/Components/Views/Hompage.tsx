'use client';
import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';
import Card from '../Molecules/Card/Card';
import Tabs from '../Molecules/Tabs/Tabs';
import { useState } from 'react';
import MatchHighlight from '../Organisms/MatchHightlight/MatchHightlight';
import useResponsive from '@/app/Utils/UseResponsiveHook';

const Homepage: React.FC = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive();
    const tabData = [
        { label: 'Aus vs WI', content: "1st Men's ODI" },
        { label: 'Ind vs Eng', content: "2nd Men's Test" },
        { label: 'SL vs Afg', content: 'Only test' },
        { label: 'Ind A vs Lions', content: '3rd unofficial Test' },
        { label: 'ILT20', content: '2024' },
    ];

    const [selectedLabel, setSelectedLabel] = useState(tabData[0].label);

    //  create a class for this
    const viewStyle: React.CSSProperties = {
        flexDirection: isDesktop ? 'row' : 'column',
        display: 'flex',
        gap: '10px',
        padding: '10px',
    };

    //  create a class for this
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column',
        gap: '10px',
        justifyContent: isDesktop ? 'space-between' : 'flex-start',
    };

    const renderView = (label: string) => {
        switch (label) {
            case 'Aus vs WI':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='Aus vs WI Highlights'
                        title='Australia takes on West Indies in a thrilling match'
                        description='A detailed recap of the match between Australia and West Indies.'
                        view={viewStyle}
                    />
                );

            case 'Ind vs Eng':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='Ind vs Eng Highlights'
                        title='India battles England in a day full of surprises'
                        description='Highlights and key moments from the India vs England match.'
                        view={viewStyle}
                    />
                );

            case 'SL vs Afg':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='SL vs Afg Highlights'
                        title='Sri Lanka faces Afghanistan in an intense clash'
                        description='Catch all the action from the Sri Lanka vs Afghanistan game.'
                        view={viewStyle}
                    />
                );

            case 'Ind A vs Lions':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='Ind A vs Lions Highlights'
                        title='India A vs Lions: A Test of Future Stars'
                        description='Emerging talents from India A and Lions go head-to-head.'
                        view={viewStyle}
                    />
                );

            case 'ILT20':
                return (
                    <MatchHighlight
                        src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg'
                        alt='ILT20 Highlights'
                        title="Highlights from the ILT20: Cricket's Newest Extravaganza"
                        description='The best moments and performances from the inaugural ILT20 league.'
                        view={viewStyle}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <>
            <NavBarContent />
            <div className={styles.center__container}>
                <ButtonContent />
                <div style={style}>
                    <Card
                        headerText={<h2 style={{ padding: '10px' }}>Match Coverage</h2>}
                        tabs={<Tabs tabs={tabData} onTabSelect={setSelectedLabel} />}
                        width={isDesktop ? '800px' : ''}
                        renderView={() => renderView(selectedLabel)}
                        paddingBottom='10px'
                    />
                    <Card
                        headerText={<h3 style={{ padding: '10px' }}>Must Watch</h3>}
                        width='280px'
                        height='200px'
                    />
                </div>
            </div>
        </>
    );
};

export default Homepage;
