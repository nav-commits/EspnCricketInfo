// ButtonContent.tsx
import React from 'react';
import Button from '../../Atoms/Button/Button';

import styles from './ScrollBar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useResponsive from '@/app/Utils/UseResponsiveHook';
import Story from '../../Atoms/Story/Story';
import { buttons, stories } from '@/app/Utils/Data';
import { Navigation } from 'swiper/modules';

const ScrollBar = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive();
    if (isMobile || isTablet) {
        return (
            <Swiper
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={10}
                navigation={true}
                className={styles['swiper-container']}
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={index}>
                        <Story imageUrl={story.imageUrl} title={story.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    } else {
        return (
            <div className={styles['button__container--content']}>
                {buttons.map((button, index) => (
                    <Button key={index} text={button.text} icon={button.icon} />
                ))}
            </div>
        );
    }
};

export default ScrollBar;
