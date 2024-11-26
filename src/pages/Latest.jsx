import React, { useEffect, useState } from 'react';
import { fetchLatest } from '../store/latestSlice';
import { useDispatch, useSelector } from 'react-redux';

const Latest = () => {
    const dispatch = useDispatch();
    const { latestNews } = useSelector((state) => state.latest); // Correct state path

    const [pagenum, setPagenum] = useState(1); // Initial page set to 1
    const [query, setQuery] = useState(''); // Default query
    const [currentQuery, setCurrentQuery] = useState(query); // For tracking the current query being searched

    // Fetch news when the page number changes (but only for the current query)
    useEffect(() => {
        if (currentQuery) {
            dispatch(fetchLatest({ pagenum, query: currentQuery }));
        }
    }, [pagenum, currentQuery, dispatch]);

    // Fetch news for the updated query on Search button click
    const fetchNews = () => {
        setPagenum(1); // Reset to page 1
        setCurrentQuery(query); // Trigger a search for the new query
    };

    // Pagination handlers
    const handlePrevPage = () => {
        if (pagenum > 1) {
            setPagenum(pagenum - 1);
        }
    };

    const handleNextPage = () => {
        setPagenum(pagenum + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full flex gap-3">
                <input
                    className="w-[70%] px-4 py-2 bg-stone-200 rounded-xl text-black"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search a Topic"
                />
                <button
                    onClick={fetchNews}
                    className="w-[30%] px-4 py-2 bg-stone-200 rounded-xl"
                >
                    Search
                </button>
            </div>

            <ul>
                {latestNews &&
                    latestNews.map((news, index) => (
                        <li key={index}>{news.author || 'Unknown Author'}</li>
                    ))}
            </ul>

            {latestNews.length !=0 && (
                <div className="flex gap-3 items-center">
                    <button
                        className="latbutt"
                        onClick={handlePrevPage}
                        disabled={pagenum <= 1}
                    >
                        Previous
                    </button>
                    {pagenum}
                    <button className="latbutt" onClick={handleNextPage}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Latest;
