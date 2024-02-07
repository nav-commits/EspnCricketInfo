'use client';
import React from 'react';
import LinkButton from '../../Atoms/LinkButton/LinkButton';
import '../../../styles/globals.scss';
import styles from './ScrollBar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useResponsive from '@/app/Utils/UseResponsiveHook';
import StoryAvatar from '../../Atoms/StoryAvatar/StoryAvatar';
import { linkButtons, stories } from '@/app/Utils/Data';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import Modal from '../../Molecules/Modal/Modal';

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
                <Modal isModalOpen={isModalOpen} onClose={closeModal} />
            </>
        );
    } else {
        return (
            <div className={styles['scrollbar__container--content']}>
                {linkButtons.map((button, index) => (
                    <LinkButton
                        key={index}
                        text={button.text}
                        icon={button.icon}
                        href={'/'}
                    />
                ))}
            </div>
        );
    }
};

export default ScrollBar;
