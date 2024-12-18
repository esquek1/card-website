import React, { useState } from "react";
import "../css/ImageSlider.css";

type ImageSliderProps = {
    posters: Poster[];
};

function ImageSlider({ posters }: ImageSliderProps) {
    // Stores image index
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return posters.length - 1;
            return index - 1;
        });
    }

    function showNextImage() {
        setImageIndex((index) => {
            if (index === posters.length - 1) return 0;
            return index + 1;
        });
    }
    return (
        <div className="slider-container">
            <div className="slider-title">
                Some artist graphics I've worked on
            </div>
            <div className="slider-content">
                <button
                    onClick={showPrevImage}
                    className="slider-arrows "
                    id="prev">
                    {"<"}
                </button>
                <div className="slider-content-images ">
                    <img
                        src={posters[imageIndex].url}
                        alt={posters[imageIndex].title}
                        className="slider-images-container"
                    />
                    <div className="slider-content-title">
                        {posters[imageIndex].title}
                    </div>
                </div>

                <button
                    onClick={showNextImage}
                    className="slider-arrows"
                    id="next">
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;
