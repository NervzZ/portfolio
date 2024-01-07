import React, {useEffect, useState} from 'react';
import './Background.css';

const Background = () => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e
        setMousePosition({x: clientX, y: clientY})
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        };
    }, [])

    const parallaxStyle = {
        top: `${-(mousePosition.y / window.innerHeight * 10)}%`,
        left: `${-(mousePosition.x / window.innerWidth * 10)}%`
    }

    return (
        <div
            className="container"
            style={parallaxStyle}
        >
            <div className="background">
                <div className="middleLayer">
                    <div className="topLayer"/>
                </div>
            </div>
        </div>
    )
}

export default Background;
