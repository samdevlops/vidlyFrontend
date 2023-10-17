import React, { useEffect, useState } from 'react'
import {getMovies} from '../services/fakeMovieService';
import Delete from './deleteComponent';
import Pagination from './pagination';
import paginate from '../utils/paginate';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesize, setPageSize] = useState(4);
    
    useEffect(() =>{
        setMovies(getMovies());
    }, []);

    function handleClick(id){
        const updatedMovies = movies.filter( m => id !== m._id);
        setMovies(updatedMovies);
    }

    function handlePageChange(page){
        setCurrentPage(page);
    }
        
    if(movies.length === 0) return <p>There are no movies available at the moment!!</p>;

    const moviesCopy = paginate(movies, currentPage, pagesize);

    return (
            <>
            <p>Showing {movies.length} movies from the list!!</p>
            <table className='table'>
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                {
                    moviesCopy.map( (movie) => {
                      return  <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Delete id={movie._id} handleClick={handleClick}/></td>
                        </tr>
                    })
                }   
                </tbody>
            </table>
            <Pagination movies={movies} currentPage={currentPage} pageSize={pagesize} onPageChange={handlePageChange} />
            </>
        );
}
 
export default Movies;