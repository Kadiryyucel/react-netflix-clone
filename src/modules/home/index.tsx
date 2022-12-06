import {useEffect, useState} from "react";
import MoviesService from "../../services/MoviesService";
import "./style.scss"

import Skeloton from "../../components/moviesSkeloton";

function Movies() {

    const [movies, setMovies] = useState<any[]>([])
    const [loading, loader] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => loader(false), 3500)
        MoviesService.getAll().then((res:any)=> {
            const {results} = res.data
            console.log(res)
            setMovies(results)
        })
    }, [])


    return (loading ? <Skeloton/> : (<div className="movies">
        {movies.map((movie, i) => {
                return (movie.backdrop_path ?
                    <div className="movie" key={i}>
                    <img src={'https://image.tmdb.org/t/p/original'+movie.backdrop_path} alt=""/>
                    <div className='info'><h4 style={{margin:'0px'}}>selam</h4><p>lol alkjald aldjlahda lkajdlkfjad ajdlkajdlksjf adllfjalkkdjf</p></div>
                </div>:'')})

        }</div>))
}
export default Movies