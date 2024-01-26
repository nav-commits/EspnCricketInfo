import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../Molecules/MainNav/MainNav';
import Image from 'next/image';

const NavBarContent = () => {
    return (
        <div className={styles.navbar_content_container}>
            <div className={styles.navbar_content_inner_container}>
                <div>
                    <Image
                        src='https://wassets.hscicdn.com/static/images/logo.png'
                        alt='espncricketinfo'
                        width={138}
                        height={21}
                    />
                </div>
                <MainNav />
                <SecondaryNav />
            </div>
        </div>
    );
};

export default NavBarContent;
