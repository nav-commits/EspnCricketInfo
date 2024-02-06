import React from 'react';
import styles from './Story.module.scss';
import Image from 'next/image';
import { StoryProps } from './StoryAvatar.types';

const StoryAvatar: React.FC<StoryProps> = ({ imageUrl, title, openModal }) => {
    return (
        <div onClick={openModal} className={styles['story__container']}>
            <div className={styles['story__container--wrapper']}>
                <Image src={imageUrl} alt='Story' height={80} width={80} />
            </div>
            <div className={styles['story-title']}>{title}</div>
        </div>
    );
};

export default StoryAvatar;
