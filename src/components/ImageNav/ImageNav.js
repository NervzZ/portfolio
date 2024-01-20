import React, {useState} from 'react'
import './ImageNav.css'

const ImageNavigator = ({images, viewSize}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleNext = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const handlePrevious = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    return (
        <div className="ImageNav">
            <button onClick={handlePrevious} disabled={currentImageIndex === 0}>Previous</button>
            <img className="Image" src={images[currentImageIndex]} alt="Displayed"/>
            <button onClick={handleNext} disabled={currentImageIndex === images.length - 1}>Next</button>
        </div>
    )
}

export default ImageNavigator;
