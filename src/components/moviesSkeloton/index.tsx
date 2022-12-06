import {useEffect, useRef, useState} from "react";
import "./style.scss"
function Index() {

    const movies = useRef<HTMLDivElement>(null)
    const [count, setCount] = useState<number>(0)
    const putPerMovieElement = useRef<any>(null)

    useEffect(() => {
        putPerMovieElement.current = setInterval(() => {
            setCount(x => x + 1)
            let div = document.createElement("div")
            div.className = "movie_skeloton";
            if(movies.current) movies.current.appendChild(div)
        }, 200);
        return () => clearInterval(putPerMovieElement.current)
    }, [])

    useEffect(() => {
        if (count > 10) {
            clearInterval(putPerMovieElement.current)
        }
    }, [count])

    return <div className="movies_skeloton" ref={movies}></div>
}
export default Index