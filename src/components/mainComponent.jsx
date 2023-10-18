import { useState, useEffect } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import FilterComponent from './filterComponent';
import Movies from './moviesComponent';

const MainComponent = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGeneres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState();
    const [ currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        setMovies(getMovies());
    }, []);

    useEffect(() => {
        let genresCopy = [ {_id : 'ajdkdakdjadkljadlk',name : "All Genres"}, ...getGenres()];
        setGeneres(genresCopy);
    },[]);
    
    useEffect(() => {
        setSelectedGenre({_id : 'ajdkdakdjadkljadlk', name : "All Genres"});
    }, []);

    function handleGenreChange(genre){
        setSelectedGenre(genre);
        setCurrentPage(1);
    }

    function handleDelete(id){
        const updatedMovies = movies.filter(movie => movie._id !== id);
        setMovies(updatedMovies);
    }

    function handlePageChange(page){
        setCurrentPage(page);
    }

    return ( 
        <div className='container'> 
            <div className="row">
                <div className="col-md-4">
                    <FilterComponent genres={genres} onGenreChange={handleGenreChange} selectedGenre={selectedGenre}/>
                </div>
                <div className="col-md-8">
                    <Movies selectedGenre={selectedGenre} movies={movies} handleDelete={handleDelete} currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
        </div>
     );
}
 
export default MainComponent;