import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../../Molecules/MainNav/MainNav';
import Image from 'next/image';
import { secondaryItemArray, mainNavArray } from '@/app/Utils/Data';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const NavBarContent = () => {
    return (
        <div className={styles['navbar__container']}>
            <div className={styles['hamburger-menu']}>
                <MenuIcon />
            </div>
            <div className={styles['navbar__content']}>
                <Link href='/'>
                    <Image
                        src='https://wassets.hscicdn.com/static/images/logo.png'
                        alt='espncricketinfo'
                        width={138}
                        height={19}
                        className={styles['navbar__container--image']}
                    />
                </Link>
                <MainNav items={mainNavArray} />
                <SecondaryNav items={secondaryItemArray} />
            </div>
        </div>
    );
};

export default NavBarContent;
