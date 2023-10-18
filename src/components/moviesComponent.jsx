import React from 'react';
import { useState } from 'react';
import Delete from './deleteComponent';
import Pagination from './pagination';
import paginate from '../utils/paginate';

function Movies(props) {

    const { movies, selectedGenre, handleDelete, currentPage, handlePageChange } = props;
    const [ pageSize, setPageSize] = useState(3);
     
    if(movies.length === 0) return <p>There are no movies available at the moment!!</p>;

    let filteredMovies = [];
    if(selectedGenre.name === "All Genres"){
        filteredMovies = movies;
    }
    else {
        filteredMovies = movies.filter( movie => movie.genre.name === selectedGenre.name);
    }

    const moviesCopy = paginate(filteredMovies, currentPage, pageSize);
 
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
                            <td><Delete id={movie._id} handleClick={handleDelete}/></td>
                        </tr>
                    })
                }   
                </tbody>
            </table>
            <Pagination moviesCopy={filteredMovies} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
            </>
        );
}
 
export default Movies;