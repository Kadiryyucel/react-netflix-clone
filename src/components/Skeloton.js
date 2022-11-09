import {useEffect, useRef, useState} from "react";
import "./components.scss"
function Skeloton({loading}) {

    const movies = useRef()
    const [count, setCount] = useState(0)
    const interval = useRef(null)

    useEffect(() => {
        console.log("hi")
        setTimeout(() => loading(false), 2500)
        interval.current = setInterval(() => {
            setCount(x => x + 1)
            let div = document.createElement("div")
            div.className = "movie"
            console.log(movies.current)
            movies.current.appendChild(div)
        }, 200);
        return () => clearInterval(interval.current)
    }, [loading])

    useEffect(() => {
        if (count > 10) {
            clearInterval(interval.current)
        }
    }, [count])

    return <div className="movies" ref={movies}></div>
}
export default Skeloton