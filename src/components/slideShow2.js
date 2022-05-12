import React, { Component, useEffect, useRef, useState } from "react";
import { CardMedia } from "@mui/material";
import "../styles/Slide.css";
import Slider from 'react-slick'


export default class Slide extends Component {
    render() {
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        const carIdImgs = ["6", "4", "7"]
        return (
            <div>
                <Slider {...setting}>
                    {carIdImgs.map((imgId, index) => (
                        <div className="slide">
                            <CardMedia
                                key={index}
                                component='img'
                                alt='slide img'
                                src={require(`../photos/cars-photos/${imgId}-detail.jpg`)}
                                sx={{ height: 500 }}
                            /></div>
                    ))}
                </Slider>
            </div>
        )
    }

}