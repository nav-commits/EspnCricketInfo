'use client';
import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../../Molecules/MainNav/MainNav.client';
import Image from 'next/image';
import { secondaryItemArray, mainNavArray } from '@/app/Utils/Data';
import MenuIcon from '@mui/icons-material/Menu';

const NavBarContent = () => {

    return (
        <div className={styles.navbar__container}>
            <div className={styles.hamburger}>
                <MenuIcon />
            </div>

            <div className={styles.navbar__content}>
                <Image
                    src='https://wassets.hscicdn.com/static/images/logo.png'
                    alt='espncricketinfo'
                    width={138}
                    height={19}
                    className={styles.image}
                />

                <MainNav items={mainNavArray} />
                <SecondaryNav items={secondaryItemArray} />
            </div>
        </div>
    );
};

export default NavBarContent;
