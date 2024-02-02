import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';
import Card from '../Molecules/Card/Card';
import Tabs from '../Molecules/Tabs/Tabs';

const Homepage: React.FC = () => {
    const tabData = [
        { label: 'Aus vs WI', content: "1st Men's ODI" },
        { label: 'Ind vs Eng', content: "2nd Men's Test" },
        { label: 'SL vs Afg', content: "Only test" },
        { label: 'Ind A vs Lions', content: "3rd unofficial Test" },
        { label: 'ILT20', content: "2024" },
    ];

    return (
        <>
            <NavBarContent />
            <div className={styles.center__container}>
                <ButtonContent />
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                    <Card
                        headerText={<h2 style={{ padding: '10px' }}>Match Coverage</h2>}
                        tabs={<Tabs tabs={tabData} />}
                        width='800px'
                    />
                    <Card
                        headerText={<h3 style={{ padding: '10px' }}>Must Watch</h3>}
                        width='250px'
                    />
                </div>
            </div>
        </>
    );
};

export default Homepage;
