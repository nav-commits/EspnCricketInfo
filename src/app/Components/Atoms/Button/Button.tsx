import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ text, icon, isDesktop }) => {
    return (
        <div style={{ width:!isDesktop? '150px': '' }} className={styles.custom__button}>
            <div className={styles['button__inner--container']}>
                <a className={styles.button__content} href='/'>
                    {text}
                </a>
                {icon && icon}
            </div>
        </div>
    );
};

export default Button;
