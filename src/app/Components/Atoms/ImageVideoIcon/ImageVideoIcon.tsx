import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './ImageVideoIcon.module.scss';
import { ImageVideoIconProps } from './ImageVideoIcon.types';

const ImageVideoIcon: React.FC<ImageVideoIconProps> = ({ width, height}) => {
    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className={styles['icon-wrapper']}
        >
            <ArrowRightIcon fontSize='large' />
        </div>
    );
};

export default ImageVideoIcon;
