import axios from "axios";

const fetchApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default fetchApi