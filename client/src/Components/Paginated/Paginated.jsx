import React from 'react';
import './Paginated.css';

const Paginated = ({ recipesPerPage, recipes, paginated}) => {
    const pageNumbers = [];
    const pages = Math.ceil(recipes/recipesPerPage);
    
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav className="paginadoContainer">
                <ul className="ul">
                    {
                        pageNumbers && pageNumbers.map(number =>(
                            <li key={number}>
                                <button  onClick={() => paginated(number)} className="numeroPaginado">{number}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Paginated