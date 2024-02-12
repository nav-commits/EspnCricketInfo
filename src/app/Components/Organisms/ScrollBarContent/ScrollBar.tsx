import React, { useState } from 'react';
import LinkButton from '../../Atoms/LinkButton/LinkButton';
import '../../../styles/globals.scss';
import styles from './ScrollBar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import StoryAvatar from '../../Atoms/StoryAvatar/StoryAvatar';
import { linkButtons, stories } from '@/app/Utils/Data';
import { Navigation } from 'swiper/modules';

import Modal from '../../Molecules/Modal/Modal';

const ScrollBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={7}
                navigation={true}
                className={styles['swiper-container']}
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={index}>
                        <StoryAvatar
                            openModal={openModal}
                            imageUrl={story.imageUrl}
                            title={story.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles['scrollbar__container--content']}>
                {linkButtons.map((button, index) => (
                    <LinkButton key={index} text={button.text} icon={button.icon} href={'/'} />
                ))}
            </div>
            <Modal isModalOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default ScrollBar;
