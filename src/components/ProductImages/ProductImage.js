import React from 'react'
import './ProductImages.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const ProductImages = (props) => {
    const { images } = props
    return (
        <div className="product-images">
            <Carousel
                showStatus= {false}
                infiniteLoop={true}
                swipeable={true}
                showIndicators={false}
                renderArrowNext = {(onNextClick) => {
                    return <button className="carousel-arrow" onClick={onNextClick}> next</button>
                }}
                renderArrowPrev = {(onPrevClick) => {
                    return <button className="carousel-arrow carousel-arrow-right" onClick={onPrevClick}> prev</button>
                }}
            >
                {
                    images.map((src, index) => {
                        return (
                            <div>
                                <img src={src}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default ProductImages