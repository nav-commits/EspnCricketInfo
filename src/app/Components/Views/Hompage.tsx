'use client';
import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';
import Card from '../Molecules/Card/Card';
import Tabs from '../Molecules/Tabs/Tabs';
import { useState } from 'react';
import Image from 'next/image';

const Homepage: React.FC = () => {
    const tabData = [
        { label: 'Aus vs WI', content: "1st Men's ODI" },
        { label: 'Ind vs Eng', content: "2nd Men's Test" },
        { label: 'SL vs Afg', content: 'Only test' },
        { label: 'Ind A vs Lions', content: '3rd unofficial Test' },
        { label: 'ILT20', content: '2024' },
    ];

    const [selectedLabel, setSelectedLabel] = useState(tabData[0].label);
    const renderView = (label: string) => {
        switch (label) {
            case 'Aus vs WI':
                return (
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px',
                            }}
                        >
                            <Image
                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg' // Use the HTTPS URL of your image
                                alt='Description of the image'
                                width={420}
                                height={250}
                                style={{ borderRadius: '10px' }}
                            />

                            <div>
                                <h2>Jaiswal stands tall and alone as England edge the day</h2>
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                );

            case 'Ind vs Eng':
                return (
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px',
                            }}
                        >
                            <Image
                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg' // Use the HTTPS URL of your image
                                alt='Description of the image'
                                width={420}
                                height={250}
                                style={{ borderRadius: '10px' }}
                            />

                            <div>
                                <h2>Jaiswal stands tall and alone as England edge the day</h2>
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                );

            case 'SL vs Afg':
                return (
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px',
                            }}
                        >
                            <Image
                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg' // Use the HTTPS URL of your image
                                alt='Description of the image'
                                width={420}
                                height={250}
                                style={{ borderRadius: '10px' }}
                            />

                            <div>
                                <h2>Jaiswal stands tall and alone as England edge the day</h2>
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                );
            case 'Ind A vs Lions':
                return (
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px',
                            }}
                        >
                            <Image
                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg' // Use the HTTPS URL of your image
                                alt='Description of the image'
                                width={420}
                                height={250}
                                style={{ borderRadius: '10px' }}
                            />

                            <div>
                                <h2>Jaiswal stands tall and alone as England edge the day</h2>
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                );
            case 'ILT20':
                return (
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px',
                            }}
                        >
                            <Image
                                src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2024/0202/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global/dm_240202_INET_CRIC_indveng_t2d1_zoomedin_nonbranded_global.jpg' // Use the HTTPS URL of your image
                                alt='Description of the image'
                                width={420}
                                height={250}
                                style={{ borderRadius: '10px' }}
                            />

                            <div>
                                <h2>Jaiswal stands tall and alone as England edge the day</h2>
                                <div>
                                    <p>welcome</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                    <Card
                        headerText={<h2 style={{ padding: '10px' }}>Match Coverage</h2>}
                        tabs={<Tabs tabs={tabData} onTabSelect={setSelectedLabel} />}
                        width='800px'
                        renderView={() => renderView(selectedLabel)}
                        paddingBottom='10px'
                    />
                    <Card
                        headerText={<h3 style={{ padding: '10px' }}>Must Watch</h3>}
                        width='250px'
                        height='200px'
                    />
                </div>
            </div>
        </>
    );
};

export default Homepage;
