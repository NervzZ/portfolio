import React, { useState } from 'react';
import './Background.css';

const Background = () => {
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setGradientPosition({ x, y });
    };

    return (
        <div
            className="background"
            onMouseMove={handleMouseMove}
            style={{
                backgroundPosition: `${gradientPosition.x}% ${gradientPosition.y}%`
            }}
        ></div>
    );
};

export default Background;
