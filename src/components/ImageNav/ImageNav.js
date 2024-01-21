import React, {useState} from 'react'
import './ImageNav.css'
import NavButton from "../Buttons/NavButton/NavButton";

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
            <NavButton next={false} onClick={handlePrevious} hide={currentImageIndex === 0}/>
            <img className="Image" src={images[currentImageIndex]} alt="Displayed"/>
            <NavButton next={true} onClick={handleNext} hide={currentImageIndex === images.length - 1}/>
        </div>
    )
}

export default ImageNavigator;
