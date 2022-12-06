import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{api_key:'784a5149cec187c08d3753aa3908cd87'}
})

export default api