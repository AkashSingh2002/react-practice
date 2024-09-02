import React, { useRef } from 'react';

const useThrottle = (func, delay) => {

    let isThrottleRef = useRef(false)

    return (...args) => {  
        if(!isThrottleRef.current){
            isThrottleRef.current = true
            func(args);
            setTimeout(() => isThrottleRef.current = false, delay)
        }
    }
}

export default useThrottle