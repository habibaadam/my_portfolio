import { useEffect, useState } from 'react'

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 * Used to render genuinely different markup per breakpoint instead of
 * duplicating a tree behind `hidden`/`lg:block`, which would make the browser
 * download every image twice.
 */
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(query).matches
    )

    useEffect(() => {
        const mql = window.matchMedia(query)
        const onChange = (event) => setMatches(event.matches)

        setMatches(mql.matches)
        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [query])

    return matches
}

export default useMediaQuery
