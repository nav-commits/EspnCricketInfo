import React from 'react';
import styles from './NavBarContent.module.scss';
import SecondaryNav from '../Molecules/SecondaryNav/SecondaryNav';
import MainNav from '../Molecules/MainNav/MainNav';


const NavBarContent = () => {
    return (
        <div className={styles.navbar_content_container}>
            <div className={styles.navbar_content_inner_container}>
                <div>
                    <img
                        style={{ width: '138px', height: '21px' }}
                        src='https://wassets.hscicdn.com/static/images/logo.png'
                        alt='espn'
                    />
                </div>

                <MainNav />
                <SecondaryNav />  
            </div>
        </div>
    );
};

export default NavBarContent;
