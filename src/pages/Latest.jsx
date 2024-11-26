import React, { useEffect, useState } from 'react'
import { fetchLatest } from '../store/latestSlice'
import { useDispatch, useSelector } from 'react-redux'

const Latest = () => {
    const dispatch = useDispatch();

    const [pagenum, setpagenum] = useState(0)
    const {latestNews} = useSelector((state)=>state.latestNews)
    
    useEffect(() => {
        dispatch(fetchLatest(pagenum))
    },[pagenum])

    return (
        <div>
            {latestNews.map((news) => {
                <li>{news.author}</li>
            })}
            
            <button>
                Previous
            </button>

            <button>
                Next
            </button>
        </div>
    )
}

export default Latest
