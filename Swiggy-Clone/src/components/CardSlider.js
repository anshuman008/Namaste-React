import React from "react";
import Slider from "react-slick";
import './cardslider.css';
import { CDN_URL } from "../utils/constants";

const CardSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const {title,carousel} = props;

  return (
    <div className="main-div">
        <h1 className="font-bold text-xl">
        {title}
        </h1>
      <Slider {...settings}>
        {carousel?.map((res,index) => (
          <div key={index} className="slide">
            <div className="card">
                <div>
                <img className="resTaurantimage-image" alt="res-image" 
                   src={CDN_URL+res?.dish?.info?.imageId}/>
                </div>
                <div>
                     <h5 className="font-bold ">{res.title}</h5>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
