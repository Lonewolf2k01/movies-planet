import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Yjc0NjMwNTMwMjQ0NjY4YmZkYmJlNzE4ZDM3ZjFjMiIsInN1YiI6IjY0NzIwYTUzYmUyZDQ5MDBhN2Q1YjJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jcmu0ssa5jOpaqMzjxJkTEYXIQWbLUB3vOc7to9-wI4"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}