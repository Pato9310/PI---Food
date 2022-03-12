import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './RecipeDetail.css';

const RecipeDetail = () => {
    const details = useSelector( state => state.detail);
    
    return (
        <div key={details.id} className="detailContainer">
            <NavBar/>
            <div className="details">            
                <div className="divimg">
                    <img className="detailImg" src={details.image ? details.image : 
                    'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Pic not found"/>
                </div>

                <h1 className="texts">{details.name}</h1>
{/* 
                {details.dishTypes ?
                <div className="ddsh">
                    <h2 className="texts">Dish Type: </h2>
                    {recipeDetails.dishTypes?.map(e => {
                        return(
                            <h2 className="dishesanddiets" key={e}>{e}</h2>
                        )
                    })}
                </div> :
                <br />
                } */}

                <div className="ddsh">
                    <h2 className="texts">Diet Type: </h2> 
                    { details.type ? details.type.map(e => <h2 className="dishesanddiets" key={e}>{e}</h2>)
                     : <p>No Diets Found</p>
                    }
                </div>

                <div className="ddsh">
                    <h3 className="texts">Summary: </h3>
                    <p className="summary">{details.summary?.replace(/<[^>]*>/g, '')}</p>
                </div>
                
                <div className="ddsh">
                    <h3 className="scores">Score: {details.score}</h3>
                    <h3 className="scores">Healthiness points: {details.healthyScore}</h3>
                </div>   

                <div className="ddsh">
                    <h3 className="texts">Steps: </h3>
                    <ul className="steps">
                        { Array.isArray(details.steps) ? details.steps.map(e => <li key={e.number}>{e.step}</li>)
                            : <li>{details.steps}</li>
                        }
                    </ul>
                </div>
                
                <Link to="/home"><button className="backButton">Go back to recipes</button></Link>
                
            </div>
        </div>
    );
};

export default RecipeDetail;
