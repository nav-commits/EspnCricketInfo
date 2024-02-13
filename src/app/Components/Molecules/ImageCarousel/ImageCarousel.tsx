import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImageCarouselProps } from '../ImageCarousel/ImageCarousel.types';
import styles from './ImageCarousel.module.scss';
import ImageVideoIcon from '../../Atoms/ImageVideoIcon/ImageVideoIcon';
import React from 'react';

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            navigation={true}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={styles['image-carousel__container']}>
                        <Image
                            src={slide.imageUrl}
                            alt={`Slide ${index + 1}`}
                            width={260}
                            height={150}
                            className={styles['image-size']}
                        />
                        <div className={styles['image-carousel--icon']}>
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
