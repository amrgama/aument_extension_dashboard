import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `${mediaQuery}`;
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const mediaHandler = () => setMatches(media.matches);
        mediaHandler();
        window.addEventListener('resize', mediaHandler);
        return () => window.removeEventListener('resize', mediaHandler);
    }, [matches, mediaQuery]);

    return matches;
};

export default useMediaQuery;