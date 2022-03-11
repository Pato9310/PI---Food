import React from 'react';
import './Paginated.css';

const Paginated = ({ recipesPerPage, recipes, paginated}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes/recipesPerPage); i++) {
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