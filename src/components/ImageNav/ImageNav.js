import React, {useState} from 'react'
import './ImageNav.css'
import NavButton from "../Buttons/NavButton/NavButton";
import TextBox from "../TextBox/TextBox";
import ProjectSelect from "../ProjectSelect/ProjectSelect";
import LoadingEffect from "../LoadingEffect/LoadingEffect";

const ImageNavigator = ({images, viewSize}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    const handleNext = () => {
        if (currentImageIndex < images.length - 1) {
            setIsLoading(true)
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const handlePrevious = () => {
        if (currentImageIndex > 0) {
            setIsLoading(true)
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
                <NavButton next={false} onClick={handlePrevious} hide={isLoading || currentImageIndex === 0}/>
                {isLoading && <LoadingEffect/>}
                <img
                    className="Image"
                    src={images[currentImageIndex]}
                    alt="Displayed"
                    onLoad={() => setIsLoading(false)}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
                <NavButton next={true} onClick={handleNext} hide={isLoading || currentImageIndex === images.length - 1}/>
            </div>
            <TextBox viewSize={viewSize} id={currentImageIndex}/>
        </>
    )
}

export default ImageNavigator;
