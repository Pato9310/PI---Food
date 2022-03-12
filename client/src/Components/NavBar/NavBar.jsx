import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <li className="nav_item">
                <Link to='/home'>
                    <button className="btn_flotante">Home</button>
                </Link>
            </li>
            <SearchBar/>
            <li className="nav_item">
                <Link to='/create-recipe'>
                    <button className="btn_flotante">Create Recipe</button>
                </Link>
            </li>
        </nav>
    )
}

export default NavBar