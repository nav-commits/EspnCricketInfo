import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ headerText }) => {
    return (
        <div className={styles.card__container}>
            {headerText && headerText}
        </div>
    );
};

export default Card;
