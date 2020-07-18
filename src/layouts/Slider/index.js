import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import 'swiper/swiper.scss'
import ProductsRow from "../../components/ProductsRow/ProductsRow";

const Slider = () => {

    return (
        <ProductsRow num="8" order={1} carousel />
    );
}

export default Slider