import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';

function AccordionUI(props) {

    const {heading, content} = props
    const [showAccordion, setShowAccordion] = useState(false)
    const [arrow, setArrow] = useState(false)


    return(
        <>
            <div className='bg-secondary'>
                <div className='d-flex align-items-center'>
                    <div className='ms-2'>{heading}</div>
                    <div className='ms-auto me-2'>{arrow ? <RiArrowUpSLine  onClick={() => {setShowAccordion(false); setArrow(false)}} /> : <IoIosArrowDown onClick={() => {setShowAccordion(true); setArrow(true)}} />}</div>
                </div>
            </div>

{showAccordion && <div className='bg-white'>
                {content}
            </div>}
        </>
    )
}

export {AccordionUI}