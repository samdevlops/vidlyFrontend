import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { moviesCopy, currentPage, pageSize, onPageChange} = props;
    const totalPgaes = Math.ceil(moviesCopy.length / pageSize);
    const pages = _.range(1, totalPgaes+1);
    
    if(pages.length === 1) return;

    return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            {
                pages.map( p => {
                return <li key={p} className={currentPage === p ? "page-item active" : "page-item" }><a className="page-link" onClick={() => onPageChange(p)}>{p}</a></li>
                })
            }
        </ul>
    </nav>
  );
}
 
export default Pagination;