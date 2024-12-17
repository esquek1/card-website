import React, { useState } from "react";
import "../css/ImageSlider.css";

type ImageSliderProps = {
    imageUrls: string[];
};

function ImageSlider({ imageUrls }: ImageSliderProps) {
    // Stores image index
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1;
            return index - 1;
        });
    }

    function showNextImage() {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) return 0;
            return index + 1;
        });
    }
    return (
        <div className="slider-container">
            <div className="slider-content">
                {imageUrls.map((url) => (
                    <img
                        key={url}
                        src={imageUrls[imageIndex]}
                        className="slider-content-image"
                    />
                ))}
            </div>
            <button onClick={showPrevImage} className="slider-arrows" id="prev">
                {"<"}
            </button>
            <button onClick={showNextImage} className="slider-arrows" id="next">
                {">"}
            </button>
        </div>
    );
}

export default ImageSlider;
