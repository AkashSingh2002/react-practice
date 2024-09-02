import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';

function AccordionUICommon(props) {

    const {heading, content, showAccordion, setShowAccordion, arrow, setArrow, index} = props



    return(
        <>
            <div className='bg-secondary'>
                <div className='d-flex align-items-center'>
                    <div className='ms-2'>{heading}</div>
                    <div className='ms-auto me-2'>{arrow == index ? <RiArrowUpSLine  onClick={() => {setShowAccordion(null); setArrow(null)}}/> : <IoIosArrowDown onClick={() => {setShowAccordion(index); setArrow(index)}} />}</div>
                </div>
            </div>

{showAccordion == index && <div className='bg-white'>
                {content}
            </div>}
        </>
    )
}

export {AccordionUICommon}