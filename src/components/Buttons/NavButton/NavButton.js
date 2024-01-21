import './NavButton.css'
import React from "react";

const NavButton = (props) => {

    const handleClick = () => {
        props.onClick()
    }

    const Back = <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
    const Next = <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>

    return (
        <svg
            className={`NavButton ${props.hide ? "Hide" : "Show"}`}
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 -960 960 960"
        >
            {props.next ? Next : Back}
        </svg>
    )
}

export default NavButton
