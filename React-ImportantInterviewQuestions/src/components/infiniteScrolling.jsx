import React, { useEffect, useState } from 'react';

function InfiniteScolling(){

    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState([])
    const [page, setPage] = useState(1);

    const handleScrollChange = () => {
        console.log(document.documentElement.scrollHeight, document.documentElement.scrollTop, window.innerHeight)
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight){
            setPage((prev) => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollChange)
    }, [])

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`);
                const data = await response?.json()
                setData((prev) => [...prev, ...data])
                console.log(data)
            }
            catch(error){
                console.log(error)
            }
        }

        fetchData();
        setIsLoading(false)

    }, [page])


    return(
        <>
            <h1>List of All Cards</h1>
            <ul>
                {data?.map((e) => {
                    return <div>
                        <li key={e.id}>{e.title}</li>
                        {isLoading && <div>Loading....</div>}
                    </div>
                })}
            </ul>
        </>
    )
}

export {InfiniteScolling}