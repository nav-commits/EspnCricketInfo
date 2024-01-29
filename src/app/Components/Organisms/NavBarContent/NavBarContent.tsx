'use client';
import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../../Molecules/MainNav/MainNav.client';
import Image from 'next/image';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { SecondaryItem } from '../../Molecules/SecondaryNav/Secondary.types';

const NavBarContent = () => {
    const secondaryItemArray: SecondaryItem[] = [
        { type: 'text', value: 'Edition LG' },
        { type: 'icon', value: DarkModeOutlinedIcon },
        { type: 'icon', value: NotificationsNoneOutlinedIcon },
        { type: 'icon', value: AppsOutlinedIcon },
    ];

    const mainNavArray = [
        { value: 'Live Scores' },
        { value: 'Series' },
        { value: 'Teams' },
        { value: 'News' },
        { value: 'Features' },
        { value: 'Videos' },
        { value: 'Stats' },
    ];

    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar__content}>
                <Image
                    src='https://wassets.hscicdn.com/static/images/logo.png'
                    alt='espncricketinfo'
                    width={138}
                    height={19}
                    style={{ marginTop: '14px' }}
                />

                <MainNav items={mainNavArray} />
                <SecondaryNav items={secondaryItemArray} />
            </div>
        </div>
    );
};

export default NavBarContent;
