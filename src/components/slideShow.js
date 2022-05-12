import React, { useEffect, useRef, useState } from "react";
import { CardMedia } from "@mui/material";
import "../styles/Slide.css";
import Slider from 'react-slick'


export default function Slideshow() {
    const carIdImgs = ["6", "4", "7"]
    const delay = 2500;
    const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carIdImgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
        resetTimeout();
      };
    }, [index]);

    return (
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {carIdImgs.map((imgId, index) => (
          <div className="slide">
          <CardMedia
            key={index}
            component='img'
            alt='slide img'
            src={require(`../photos/cars-photos/${imgId}-detail.jpg`)}
            sx={{height : 500}}
           />
           <div><h1></h1></div>
           </div>
        ))}
      </div>

      <div className="slideshowDots">
        {carIdImgs.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    )
}