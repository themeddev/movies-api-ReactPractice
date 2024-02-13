import MoviesDetail from "./MoviesDetail";
import MoviesList from "./MoviesList";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const MoviesApp = () => {

    const [movies, setMovies] = useState([])

    const [api, setApi] = useState({
        type : '',
        year : '',
        title:'',
    })

    const handelChange = (e) => {
        setApi({
            ...api,
            [e.target.name] : e.target.value,
        })
    }


    const handelSearch = (e) => {
        e.preventDefault();
        const {type, year, title} = api

        fetch(`https://www.omdbapi.com/?apikey=6a43f971&type=${type}&y=${year}&s=${title} `)
        .then(
            res => res.json()
        ).then(
            data =>{ 
                setMovies(data.Search),
                console.log(data.Search)
            })
    }   
    
    
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={
                    <MoviesList handelSearch={handelSearch} movies={movies} handelChange={handelChange} />} />
                <Route path="/:id" element={<MoviesDetail />} />
            </Routes>
        </Router>
     );
}
 
export default MoviesApp;