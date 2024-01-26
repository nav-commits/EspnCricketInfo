'use client';
import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../../Molecules/MainNav/MainNav.client';
import Image from 'next/image';



const NavBarContent = () => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar__content}>
                <Image
                    src='https://wassets.hscicdn.com/static/images/logo.png'
                    alt='espncricketinfo'
                    width={138}
                    height={19}
                    style={{ marginTop: '5px' }}
                />

                <MainNav />
                <SecondaryNav />
            </div>
        </div>
    );
};

export default NavBarContent;
