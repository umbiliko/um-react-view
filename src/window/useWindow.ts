import { useEffect, useState } from 'react';

const windowToState = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth
});

// custom hook
function useWindow() {
    const [window, setWindow] = useState(windowToState());

    useEffect(() => {
        const handleResize = () => {
            setWindow(windowToState());
        };

        document.addEventListener('resize', handleResize);

        // cleanup effect
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return window;
}

export default useWindow;