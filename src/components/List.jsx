import { useEffect, useState } from "react";
import Card from "./Card"
import '../css/list.css'

function List() {
    const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=aa6cf6c7'

    const [movieSearch, setMovieSearch] = useState('batman')
    const [dataMovies, setDataMovies] = useState([])
    const [error, setError] = useState('')


    async function getMovies() {
        const movies = await (await fetch(`${API}&s=${movieSearch}`)).json()
        setDataMovies(movies.Search)
    }

    useEffect(() => {
        getMovies();
    },[]);

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch(`${API}&s=${movieSearch}`)
        const data = await res.json();
        console.log(data)
        if(data.Search) {
            setDataMovies(data.Search)
            setError('')
            setMovieSearch('')
        }else{
            setError('No se encontro tu busqueda')
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            onChange={e => setMovieSearch(e.target.value)}
                            value={movieSearch}
                            autoFocus
                        />
                    </form>
                    <p>{error}</p>
                </div>
            </div>
            <div className="movies-container">
                {dataMovies.map((movie, index)=><Card movie={movie} key={index}/>) }
            </div>

        </>

    )
}

export default List
