import {useEffect, useState} from "react";
import MoviesService from "../../services/MoviesService";
import "./style.scss"

import Skeloton from "../../components/skeloton";


function Movies() {

    const [movies, setMovies] = useState([])
    const [loading, loader] = useState(true)

    useEffect(() => {
        setTimeout(() => loader(false), 2500)
        MoviesService.getAll().then(res => {
            const {results} = res.data
            console.log(res)
            setMovies(results)
        })
    }, [])


    return (loading ? <Skeloton/> : (<div className="movies">{movies.map((movie, i) => {
                return (movie.backdrop_path?<div className="movie" key={i}>
                    <img src={'https://image.tmdb.org/t/p/original'+movie.backdrop_path}/>
                    <div className='info'><h4 style={{margin:'0px'}}>selam</h4><p>lol alkjald aldjlahda lkajdlkfjad ajdlkajdlksjf adllfjalkkdjf</p></div>
                </div>:'')})

        }</div>))
}
export default Movies