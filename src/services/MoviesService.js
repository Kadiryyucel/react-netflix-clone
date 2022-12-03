import Api from "./index"

const getAll = ()=>{
    return Api.get('/movie/popular')
}
const getMovieImg = (img)=>{
    Api.defaults.baseURL = 'https://image.tmdb.org/'
    Api.defaults.params = {}
    return Api.get('t/p/original'+img)
}

let services = {getAll,getMovieImg}
export default services