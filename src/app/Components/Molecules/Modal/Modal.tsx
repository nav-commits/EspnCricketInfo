import React from 'react';
import { ModalProps } from './Modal.types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Modal.module.scss';

const Modal: React.FC<ModalProps> = ({ isModalOpen, onClose, stories }) => {
    if (!isModalOpen) return null;
    return (
        <div className={styles['model__content']}>
            <IconButton onClick={onClose} className={styles['icon--button']}>
                <CloseIcon />
            </IconButton>
            {stories}
        </div>
    );
};

export default Modal;
