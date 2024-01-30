import React from 'react';
import Button from '../../Atoms/Button/Button';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import styles from './ButtonContent.module.scss';

const ButtonContent = () => {
    const buttons = [
        {
            text: 'T20 World Cup schedule',
            icon: <KeyboardArrowRightOutlinedIcon fontSize='small' />,
        },
        { text: 'ESPNcricinfo Awards', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'Updated IPL squads', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'WTC points table', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'ICC player rankings', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'ICC team rankings', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'Writers', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
        { text: 'Ask Cricinfo', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    ];
    return (
        <div className={styles['button__container--content']}>
            {buttons.map((button, index) => (
                <Button key={index} text={button.text} icon={button.icon} />
            ))}
        </div>
    );
};

export default ButtonContent;
