import {useEffect, useRef, useState} from "react";
import "./style.scss"
function Index() {

    const movies = useRef()
    const [count, setCount] = useState(0)
    const interval = useRef(null)

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(x => x + 1)
            let div = document.createElement("div")
            div.className = "movie_skeloton";
            movies.current.appendChild(div)
        }, 200);
        return () => clearInterval(interval.current)
    }, [])

    useEffect(() => {
        if (count > 10) {
            clearInterval(interval.current)
        }
    }, [count])

    return <div className="movies_skeloton" ref={movies}></div>
}
export default Index