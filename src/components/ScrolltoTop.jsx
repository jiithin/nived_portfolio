import React, { useEffect, useState } from 'react';
import { FaAngleUp } from "react-icons/fa6";

function ScrollToTop() {
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 2000;
            setShouldRender(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return shouldRender ? (
        <button
            className='fixed bottom-6 right-6 bg-neutral-900/50 rounded-full p-3 cursor-pointer shadow-lg shadow-orange-500/10 ring-2 ring-orange-200/10 hover:bg-neutral-700/50 transition-all duration-300 z-50'
            onClick={handleClick}
        >
            <FaAngleUp className='text-2xl text-orange-400'/>
        </button>
    ) : null;
}

export default ScrollToTop;
