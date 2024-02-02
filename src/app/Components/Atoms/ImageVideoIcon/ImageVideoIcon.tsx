import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './ImageVideoIcon.module.scss';
import { ImageVideoIconProps } from './ImageVideoIcon.types';

const ImageVideoIcon: React.FC<ImageVideoIconProps> = ({ width, height, top, left, isDesktop }) => {
    return (
        <div
            style={{
                width: width,
                height: height,
                top: isDesktop ? top : '110px',
                left: isDesktop ? left : '10px',
            }}
            className={styles.iconWrapper}
        >
            <ArrowRightIcon fontSize='large' />
        </div>
    );
};

export default ImageVideoIcon;
