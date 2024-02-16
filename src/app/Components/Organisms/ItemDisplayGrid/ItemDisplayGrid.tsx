import React from 'react';
import Image from 'next/image';
import styles from '../ItemDisplayGrid/ItemDisplay.module.scss';
import { ItemDisplayGridProps } from './ItemDisplay.types';

const ItemDisplayGrid: React.FC<ItemDisplayGridProps> = ({ data }) => {
    return (
        <div className={styles['grid__container']}>
            {data}
        </div>
    );
};

export default ItemDisplayGrid;
