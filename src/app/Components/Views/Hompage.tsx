import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';
import Card from '../Molecules/Card/Card';

const Homepage: React.FC = () => {
    return (
        <>
            <NavBarContent />
            {/* main content on homepage */}
            <div className={styles.center__container}>
                <ButtonContent />
                <Card headerText={<h2>Match Coverage</h2>} />
            </div>
        </>
    );
};

export default Homepage;
