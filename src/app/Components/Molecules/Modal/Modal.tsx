import Stories from 'react-insta-stories';
import React from 'react';
import { ModalProps } from './Modal.types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Modal.module.scss';
import { storyContent } from '@/app/Utils/Data';

const StoryModal: React.FC<ModalProps> = ({ isModalOpen, onClose }) => {
    if (!isModalOpen) return null;
    return (
        <div className={styles['model__content']}>
            <div className={styles['model__content--wrapper']}>
                <IconButton onClick={onClose} className={styles['icon--button']}>
                    <CloseIcon />
                </IconButton>
                <Stories
                    stories={storyContent}
                    defaultInterval={1500}
                    width={300}
                    height={500}
                    onAllStoriesEnd={onClose}
                />
            </div>
        </div>
    );
};

export default StoryModal;
