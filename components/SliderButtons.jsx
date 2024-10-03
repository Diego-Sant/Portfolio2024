"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderButtons = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();

    const handlePrevClick = () => {
        if (swiper.isBeginning) {
            swiper.slideTo(swiper.slides.length - 1);
        } else {
            swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiper.isEnd) {
            swiper.slideTo(0);
        } else {
            swiper.slideNext();
        }
    };
    
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={handlePrevClick}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={handleNextClick}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default SliderButtons
