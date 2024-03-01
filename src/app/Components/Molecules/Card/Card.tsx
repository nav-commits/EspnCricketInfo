import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
    headerText,
    tabs,
    showContentBelow,
    paddingBottom,
    cardSize,
    padding,
    showContentTop,
    width
}) => {
    return (
        <div
            className={`${styles.card__container} ${cardSize ? styles[cardSize] : ''}`}
            style={{ paddingBottom, padding: padding, width: width }}
        >
            {showContentTop && showContentTop}
            {headerText && headerText}
            {tabs && tabs}
            {typeof showContentBelow === 'function' ? showContentBelow() : showContentBelow}
        </div>
    );
};

export default Card;
