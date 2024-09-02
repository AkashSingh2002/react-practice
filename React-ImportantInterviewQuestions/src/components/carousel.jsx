import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CarouselComponent(props){

    const {data} = props;

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
       const interval = setTimeout(() => handleLeftClick(), 2000);
       return () => clearTimeout(interval)
    },[currentSlide])

    const handleLeftClick = () => {
       (currentSlide === (data.length - 1)) ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
    }

    const handleRightClick = () => {
        (currentSlide === 0) ? setCurrentSlide(data.length - 1) : setCurrentSlide(currentSlide - 1)
    }
    console.log(data)

    return (
        <>
        <div className='corousel'>
            <div className='iconLeft'>
                <FaArrowLeft onClick={handleRightClick} />
            </div>
            {data?.map((e, index) => {
                return <div className={index !== currentSlide ? 'slide' : 'slide-hidden'}><img src={e.src} alt={e.alt} /></div>
            })}
            <div className='iconRight'>
                <FaArrowRight onClick={handleLeftClick} />
            </div>

<div className='roundCircleParent' style={{paddingRight: `${data?.length * 12}px`}}>
    {data?.map((e, index) => {
    return <span key={index} style={{marginLeft: `${index*30}px`, background: currentSlide === index ? 'orange' : "grey"}} className='roundedCircle'>
            </span>
    })            }
</div>

        </div>
        </>
    )
}

export {CarouselComponent}