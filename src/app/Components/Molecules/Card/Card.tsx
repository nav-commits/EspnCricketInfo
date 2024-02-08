import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
    headerText,
    tabs,
    width,
    showContent,
    paddingBottom,
    height,
}) => {
    return (
        <div
            style={{ minWidth: width, paddingBottom: paddingBottom, maxHeight: height }}
            className={styles.card__container}
        >
            {headerText && headerText}
            {tabs && tabs}
            {typeof showContent === 'function' ? showContent() : showContent}
        </div>
    );
};

export default Card;
