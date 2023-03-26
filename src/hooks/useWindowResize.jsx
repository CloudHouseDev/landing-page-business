import { useState, useEffect } from "react";

function useWindowResize() {
    const defaultMediaQueries = {
        LAPTOP_IN_PX: 1024,
    };

    const [currentSize, setCurrentSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleWindowResize = () => {
            setCurrentSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [window]);

    return { currentSize, defaultMediaQueries };
}

export default useWindowResize;
