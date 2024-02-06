import Stories from 'react-insta-stories';
import React from 'react';
import { ModalProps } from './Modal.types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Modal.module.scss';
import { storyContent } from '@/app/Utils/Data';

const Modal: React.FC<ModalProps> = ({ isModalOpen, onClose }) => {
    if (!isModalOpen) return null;
    return (
        <div className={styles['model__content']}>
            <IconButton onClick={onClose} className={styles['icon--button']}>
                <CloseIcon />
            </IconButton>
            <Stories
                stories={storyContent}
                defaultInterval={1500}
                width={'100%'}
                height={'100%'}
                onAllStoriesEnd={onClose}
            />
        </div>
    );
};

export default Modal;
