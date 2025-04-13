import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/slider.css'

type NewsSliderProps = {
    images: string[];
};

function NewsSlider({ images }: NewsSliderProps) {
    if (!images) return null;


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="notFound" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default NewsSlider