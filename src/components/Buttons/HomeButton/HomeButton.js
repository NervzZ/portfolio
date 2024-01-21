import './HomeButton.css'
import React from "react";

const HomeButton = (props) => {

    const handleClick = () => {
        props.onClick(true)
    }

    return (
        <svg
            className="BackArrow"
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="3%"
            viewBox="0 -960 960 960"
        >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
        </svg>
    )
}

export default HomeButton
