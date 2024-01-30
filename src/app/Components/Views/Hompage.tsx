import React from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import ButtonContent from '../Organisms/ButtonContent/ButtonContent';
import styles from '../Organisms/ButtonContent/ButtonContent.module.scss';

const Homepage: React.FC = () => {
    return (
        <>
            <NavBarContent />
            {/* main content on homepage */}
            <div className={styles.center__container}>
                <ButtonContent />
                <h1>Card component with tabs will be here</h1>
            </div>
        </>
    );
};

export default Homepage;
