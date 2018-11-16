import { useEffect, useState } from 'react';

// custom hook
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        document.addEventListener('resize', handleResize);

        // cleanup effect
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

export default useWindowWidth;
