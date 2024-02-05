// Import React and CSS module
import React from 'react';
import styles from './Story.module.scss'; 
import Image from 'next/image';
import { StoryProps } from './Story.types';


const Story :React.FC<StoryProps> = ({ imageUrl, title }) => {
    return (
        <div className={styles['story__container']}>
            <div className={styles['story__container--wrapper']}>
                <Image src={imageUrl} alt='Story' height={80} width= {80} />
            </div>
            <div className={styles['story-title']}>{title}</div>
        </div>
    );
};

export default Story;
