import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [shownav, setShownav] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShownav(true); // Automatically show nav on large screens
            } else {
                setShownav(false); // Hide nav on smaller screens
            }
        };

        // Initial check
        handleResize();

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setShownav(!shownav);
    };

    return (
        <div className="p-2 m-3 rounded-xl bg-stone-200 shadow-lg flex flex-col items-center lg:flex-row lg:w-[400px] lg:justify-center">
            <i
                className="bi bi-list icon cursor-pointer lg:hidden"
                onClick={handleClick}
            ></i>

            <div
                className={`flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out lg:flex-row lg:justify-between lg:justify-center w-full ${shownav ? 'mt-2 max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden lg:mt-0 lg:items-center lg:space-y-0 lg:px-6`}
            >
                <Link
                    to="/"
                    onClick={() => setActiveNav('home')}
                >
                    <i
                        className={`bi bi-house-door icon ${activeNav === 'home' ? 'active' : ''}`}
                    ></i>
                </Link>
                <Link
                    to="/latest"
                    onClick={() => setActiveNav('latest')}
                >
                    <i
                        className={`bi bi-calendar-check icon ${activeNav === 'latest' ? 'active' : ''}`}
                    ></i>
                </Link>
                <Link
                    to="/headlines"
                    onClick={() => setActiveNav('headlines')}
                >
                    <i
                        className={`bi bi-newspaper icon ${activeNav === 'headlines' ? 'active' : ''}`}
                    ></i>
                </Link>
                <Link
                    to="/sources"
                    onClick={() => setActiveNav('sources')}
                >
                    <i
                        className={`bi bi-flag icon ${activeNav === 'sources' ? 'active' : ''}`}
                    ></i>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
