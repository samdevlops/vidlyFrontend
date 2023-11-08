import React from 'react';

const FilterComponent = (props) => {
    const {genres, onGenreChange, selectedGenre} = props;
    return ( 
        <ul className="list-group">
            {
                genres.map(genre=> {
                    return (<li key={genre.name} className={ selectedGenre === genre ? "list-group-item active": "list-group-item"} onClick={() => onGenreChange(genre)}>{genre.name}</li>);
                })     
            } 
        </ul>
    );
}
 
export default FilterComponent;