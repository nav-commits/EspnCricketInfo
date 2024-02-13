import React from 'react';
import { linkProps } from './LinkButton.types';
import styles from './LinkButton.module.scss';
import Link from 'next/link';

const LinkButton: React.FC<linkProps> = ({ text, icon,href }) => {
    return (
        <div  className={styles.custom__button}>
            <div className={styles['button__inner--container']}>
                <Link className={styles.button__content} href={href ?? ''}>
                    {text}
                </Link>
                {icon && icon}
            </div>
        </div>
    );
};

export default LinkButton;
