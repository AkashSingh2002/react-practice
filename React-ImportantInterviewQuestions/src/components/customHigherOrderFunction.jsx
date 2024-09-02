import React from 'react';

const customFilter = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}

const customMap = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr))
    }
    return result
}

const customReduce = (arr, callback, inival) => {
    let val = inival
    for(let i = 0; i < arr.length; i++){
        val = callback(arr[i], val)
    }
    return val
}

const customSort = (arr, comparator) => {
    return arr.sort((a, b) => comparator(a, b))
}

const ascending = (a, b) => {
    return a - b
}

function HigherOrderCustomFunctions(){

    let data = [2, 4, 1, 5, 3, 8]

    let mappedValue = customMap(data, (e) => e*2)
    let filteredValue = customFilter(data, (e) => e !== 3)
    let reducedValue = customReduce(data, (acc, val) => acc + val, 0)
    let sortedValue = customSort(data, ascending)


    return(
        <>
        {[mappedValue, filteredValue, reducedValue, sortedValue].join(", ")}
        </>
    )
}

export {HigherOrderCustomFunctions}