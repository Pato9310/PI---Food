import React from "react";
import { Link } from "react-router-dom";
import './Recipe.css';

const Recipe = (recipes) => {
    const { image, name, diets, id } = recipes
   
    return (
        <div className="maincontainer" key={id}>
            <div className="front">
                <div className="image">
                    <img src={'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Not found"/>
                    <h2 className="recipeName">{name}</h2>            
                    <hr/>
                </div>
                <div className="dietcontainer">
                    { diets?.map(e => <h5 className="diets" key={e}>{e}</h5>)}            
                </div>
                <hr/>
                <Link className="link" to={`/recipes/${id}`}>
                    <button className="btn">Ver Mas</button>
                </Link>
            </div>
        </div>
    )
};

export default Recipe;