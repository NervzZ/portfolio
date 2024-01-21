import './BackArrow.css'
import backArrow from "../../../icons/back_arrow.svg";
import React from "react";

const BackArrow = (props) => {

    const handleClick = () => {
        props.onClick(true)
    }

    return (
        <img
            className="BackArrow"
            src={backArrow}
            alt="Back"
            onClick={handleClick}
        />
    )
}

export default BackArrow
