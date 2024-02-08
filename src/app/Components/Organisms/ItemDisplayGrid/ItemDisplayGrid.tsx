import React from 'react';
import Image from 'next/image';
import styles from '../ItemDisplayGrid/ItemDisplay.module.scss';
import { ItemDisplayGridProps } from './ItemDisplay.types';

const ItemDisplayGrid: React.FC<ItemDisplayGridProps> = ({ data }) => {
    return (
        <div className={styles['grid__container']}>
            {data.map((item, index) => (
                <div className={styles['grid-item']} key={index}>
                    <Image
                        src={item.imgSrc}
                        alt={'Content'}
                        width={180}
                        height={100}
                        style={{
                            borderRadius: '10px',
                            marginRight: '20px',
                        }}
                    />
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemDisplayGrid;
