'use client';
import React from 'react';
import Button from '../../Atoms/Button/Button';
import '../../../styles/globals.scss';
import styles from './ScrollBar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useResponsive from '@/app/Utils/UseResponsiveHook';
import StoryAvatar from '../../Atoms/StoryAvatar/StoryAvatar';
import { buttons, stories } from '@/app/Utils/Data';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import StoryModal from '../../Molecules/Modal/Modal';

const ScrollBar = () => {
    const { isMobile, isTablet } = useResponsive();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (isMobile || isTablet) {
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
                <StoryModal isModalOpen={isModalOpen} onClose={closeModal} />
            </>
        );
    } else {
        return (
            <div className={styles['scrollbar__container--content']}>
                {buttons.map((button, index) => (
                    <Button key={index} text={button.text} icon={button.icon} />
                ))}
            </div>
        );
    }
};

export default ScrollBar;
