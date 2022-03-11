import React from "react";
import './Recipe.css';


let prevId = 1;

const Recipe = (recipes) => {
    const { image, name, diets } = recipes
   
    return (
        <div className="recipe">
            
            <div>
                <img className="recipeImg" src={image} alt="Not found"/>
            </div>
            
            <div>
                <h2 className="recipeName">{name}</h2>            
            </div>

            <div className="dietcointainer">
                { diets?.map(e => <h5 className="diets" key={prevId++}>{e}</h5>)}            
            </div>
            
        </div>
    )
};

export default Recipe;