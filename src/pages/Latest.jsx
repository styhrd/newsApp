import React, { useEffect, useState } from 'react';
import { fetchLatest } from '../store/latestSlice';
import { useDispatch, useSelector } from 'react-redux';

const Latest = () => {
    const dispatch = useDispatch();

    const [pagenum, setpagenum] = useState(1); // Set initial page to 1
    const { latestNews } = useSelector((state) => state.latest); // Corrected state path

    // useEffect(() => {
    //     dispatch(fetchLatest(pagenum)); // Dispatch fetchLatest with page number
    // }, [pagenum, dispatch]);

    const handlePrevPage = () => {
        if (pagenum > 1) {
            setpagenum(pagenum - 1); // Decrease page number
        }
    };

    const handleNextPage = () => {
        setpagenum(pagenum + 1); // Increase page number
    };

    return (
        <div>
            <ul>
                {latestNews.map((news, index) => (
                    <li key={index}>{news.author || 'Unknown Author'}</li>
                ))}
            </ul>
            
            <div className='flex gap-3 items-center'>
                <button className='latbutt' onClick={handlePrevPage} disabled={pagenum <= 1}>Previous</button>
                {pagenum}
                <button className='latbutt' onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default Latest;
