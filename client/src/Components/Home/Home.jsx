import React from 'react';
import NavBar from '../NavBar/NavBar';
import Recipes from '../Recipes/Recipes';
import './Home.css';

const Home = () => {    
    return (
        <div className="homeContainer">
            {
                <div>
                    <div className="navBar">
                        <NavBar/>
                    </div>
                    <div className="cards">
                        <Recipes/>
                    </div>
                </div>
            }
        </div>
    )
};

export default Home;    
