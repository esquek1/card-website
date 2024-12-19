import React, { useState } from "react";
import "../css/ImageSlider.css";

type Poster = {
    url: string; // The URL of the poster image
    title: string; // The title of the poster
};

type ImageSliderProps = {
    posters: Poster[];
};

function ImageSlider({ posters }: ImageSliderProps) {
    // Stores image index
    const [imageIndex, setImageIndex] = useState(0);

    const showPrevImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? posters.length - 1 : prevIndex - 1
        );
    };

    const showNextImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === posters.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="slider-container">
            <div className="slider-title">
                Some artist graphics I've worked on
            </div>
            <div className="slider">
                <button
                    onClick={showPrevImage}
                    className="slider-arrows "
                    id="prev">
                    {"<"}
                </button>
                <div
                    className="slider-content"
                    style={{
                        transform: `translateX(-${imageIndex * 100}%)`,
                    }}>
                    {/* {posters.map((poster, index) => (
                        <div key={index} className="slider-content-image">
                            <img
                                src={poster.url}
                                alt={poster.title}
                                className="slider-image"
                            />
                            <div className="slider-image-title">
                                {poster.title}
                            </div>
                        </div>
                    ))} */}
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
