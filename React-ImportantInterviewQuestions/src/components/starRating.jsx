import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);

    const handleClick = (index) => {
        if ((index + 1) === currentValue) {
            setCurrentValue(0);
        } else {
            setCurrentValue(index + 1);
        }
    };

    const handleMouseOver = (index) => {
        setHoverValue(index + 1);
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    };

    const stars = Array(5).fill(0);

    return (
        <>
            {stars.map((_, index) => (
                <FaStar 
                    key={index}
                    color={(currentValue > index) || (hoverValue > index) ? 'orange' : 'grey'}
                    onClick={() => handleClick(index)}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </>
    );
}

export { StarRating };
