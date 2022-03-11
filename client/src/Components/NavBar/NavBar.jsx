import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Link className="navLink" to='/home'>
                <button>Home</button>
            </Link>
            <Link className="navLink" to='/create-recipe'>
                <button>Create Recipe</button>
            </Link>
        </div>
    )
}

export default NavBar