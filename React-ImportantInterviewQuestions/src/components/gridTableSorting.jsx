import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function GridSorting() {
    const [apiData, setApiData] = useState([]);

    const [paginData, setPaginData] = useState({
        userId: true,
        id: true,
        title: true,
        body: true,
    });

    const handleSortClick = (key) => {
        // setPaginData({
        //     userId: true,
        //     id: true,
        //     title: true,
        //     body: true,
        // })
        // setPaginData((prev) => ({ ...prev, [key]: !prev[key] }));

        setPaginData((prev) => {
            const newPaginData = Object.keys(prev).reduce((acc, val) => {
                acc[val] = (val === key ? !prev[key] : true)
                return acc
            }, {})
            return newPaginData
        })

        setApiData((prev) => {
            const updatedData = [...prev].sort((a, b) => {
                if (typeof a[key] === 'string') {
                    return paginData[key] ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
                } else if (typeof a[key] === 'number') {
                    return paginData[key] ? a[key] - b[key] : b[key] - a[key];
                }
                return 0;
            });

            return updatedData;
        });
    };

    const getData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=1`);
        const data = await response.json();
        setApiData(data);
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <table className='table-grid'>
            <thead>
                <tr>
                    <td className='d-flex'>User ID {paginData?.userId ? <FaArrowUp onClick={() => handleSortClick('userId')} className='mt-1 ms-2' /> : <FaArrowDown onClick={() => handleSortClick('userId')} className='mt-1 ms-2' />}</td>
                    <td>ID {paginData?.id ? <FaArrowUp onClick={() => handleSortClick('id')} className='mt-1 ms-2' /> : <FaArrowDown onClick={() => handleSortClick('id')} className='mt-1 ms-2' />}</td>
                    <td>Title {paginData?.title ? <FaArrowUp onClick={() => handleSortClick('title')} className='mt-1 ms-2' /> : <FaArrowDown onClick={() => handleSortClick('title')} className='mt-1 ms-2' />}</td>
                    <td>Body {paginData?.body ? <FaArrowUp onClick={() => handleSortClick('body')} className='mt-1 ms-2' /> : <FaArrowDown onClick={() => handleSortClick('body')} className='mt-1 ms-2' />}</td>
                </tr>
            </thead>
            <tbody>
                {apiData?.map((e) => {
                    return (
                        <tr key={e.id}>
                            <td>
                                {e.userId}
                            </td>
                            <td>
                                {e.id}
                            </td>
                            <td>
                                {e.title}
                            </td>
                            <td>
                                {e.body}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export { GridSorting }
