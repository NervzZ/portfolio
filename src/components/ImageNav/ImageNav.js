import React, {useState} from 'react'
import './ImageNav.css'
import NavButton from "../Buttons/NavButton/NavButton";
import TextBox from "../TextBox/TextBox";
import ProjectSelect from "../ProjectSelect/ProjectSelect";

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
        <>
            <ProjectSelect
                viewSize={viewSize}
                currentImageIndex={currentImageIndex}
                setImageIndex={(id) => setCurrentImageIndex(id)}
            />
            <div className="ImageNav">
                <NavButton next={false} onClick={handlePrevious} hide={currentImageIndex === 0}/>
                <img className="Image" src={images[currentImageIndex]} alt="Displayed"/>
                <NavButton next={true} onClick={handleNext} hide={currentImageIndex === images.length - 1}/>
            </div>
            <TextBox viewSize={viewSize} id={currentImageIndex}/>
        </>
    )
}

export default ImageNavigator;
