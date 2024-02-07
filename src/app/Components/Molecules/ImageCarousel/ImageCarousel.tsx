import React from 'react';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ImageCarouselProps } from '../ImageCarousel/ImageCarousel.types';
import styles from './ImageCarousel.module.scss';
import ImageVideoIcon from '../../Atoms/ImageVideoIcon/ImageVideoIcon';

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={styles['image-carousel__container']}>
                        <Image
                            src={slide.imageUrl}
                            alt={`Slide ${index + 1}`}
                            width={260}
                            height={150}
                            style={{ borderRadius: '10px' }}
                        />
                        <div className={styles['image-carousel--img']}>
                            <ImageVideoIcon width='35px' height='35px' />
                        </div>
                        <p className={styles['image-carousel--text']}>{slide.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarousel;
