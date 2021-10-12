import React from "react";
import Slider from "react-slick";
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThumbnaisImg } from "../../styledComponents";

const CenterMode = (porps) => {
    const { data, autoplay, slidesToShow, customClass, arrows, autoplaySpeed, speed, pauseOnHover, thumbnailsSize, slidesToScroll } = porps
    const settings = {
        className: `center slides ${customClass}`,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        speed: speed,
        autoplaySpeed: autoplaySpeed,
        arrows: arrows,
        autoplay: autoplay,
        pauseOnHover: pauseOnHover,
        slidesToScroll: slidesToScroll,
        prevArrow: <div className='preArrow arrows'>pre</div>,
        nextArrow: <div className='nextArrow arrows'>next</div>,
    };

    return (
        <Slider {...settings}>
            {data.layoutTitles.titles.map((item, key) => {
                return (item.thumbnails[thumbnailsSize] && item.thumbnails[thumbnailsSize].url ? <div key={key}>  <ThumbnaisImg src={item.thumbnails[thumbnailsSize].url} alt={item.thumbnails[thumbnailsSize].title} /> </div> : null)
            })}
        </Slider>
    );
}
export default CenterMode;