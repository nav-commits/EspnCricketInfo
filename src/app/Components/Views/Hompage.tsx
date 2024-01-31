// Homepage.tsx
import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';
import Card from '../Molecules/Card/Card';
import Tabs from '../Organisms/Tabs/Tabs';

const Homepage: React.FC = () => {
    const tabData = [
        { label: 'Match 1', content: "1st Men's Test" },
        { label: 'Match 2', content: "2nd Men's Test" },
        { label: 'Match 2', content: "2nd Men's Test" },
        { label: 'Match 2', content: "2nd Men's Test" },
        { label: 'Match 2', content: "2nd Men's Test" },
    ];

    return (
        <>
            <NavBarContent />
            <div className={styles.center__container}>
                <ButtonContent />
                <Card headerText={<h2>Match Coverage</h2>} tabs={<Tabs tabs={tabData} />} />
            </div>
        </>
    );
};

export default Homepage;
