import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
    headerText,
    tabs,
    showContent,
    paddingBottom,
    cardSize,
}) => {
    return (
        <div
            className={`${styles.card__container} ${cardSize ? styles[cardSize] : ''}`}
            style={{ paddingBottom }}
        >
            {headerText && headerText}
            {tabs && tabs}
            {typeof showContent === 'function' ? showContent() : showContent}
        </div>
    );
};

export default Card;
