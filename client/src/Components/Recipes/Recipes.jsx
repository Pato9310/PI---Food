import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipes, aplhabeticalSort, scoreSort, getDietsType, dietTypeFilter } from '../../Actions';
import Paginated from '../Paginated/Paginated';
import Recipe from '../Recipe/Recipe';
import './Recipes.css';

const Recipes = () => {
    const diets = useSelector( state => state.diets );
    const filtered = useSelector( state => state.filtered );
    const recipes = useSelector( state => state.recipes );
    const dispatch = useDispatch();
    const [ currentPage, setCurrentPage ] = useState(1);
    
    //Pages
    const recipesPerPage = 9;
    const lastRecipe = currentPage * recipesPerPage;
    const firstRecipe = lastRecipe - recipesPerPage;
    
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    
    const reloadButton = (event) => {
        event.preventDefault();
        dispatch(getRecipes());
    }
    
    const handleFilterDietType = (event) => {
        dispatch(dietTypeFilter(event.target.value));
        setCurrentPage(1);
      }
    
    const sortByName = (event) => {
        event.preventDefault();
        dispatch(aplhabeticalSort(event.target.value));
        setCurrentPage(1);
    }
    
    const sortByScore = (event) => {
        event.preventDefault();
        dispatch(scoreSort(event.target.value));
        setCurrentPage(1);
    }

    const filteredRecipes = () => {
        if (filtered.length) {
            return filtered.slice(firstRecipe, lastRecipe)
        }
        return recipes.slice(firstRecipe, lastRecipe)
    }
    
    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDietsType());
    }, [filtered]);

    return (
        <div className="Container">
            <div className="filterContainer">
                <button className='refresh' onClick={(event) => reloadButton(event)}>Reload</button>
                <label className="filters">Sort:</label>
                <select className='select' onChange={(event) => sortByName(event)}>
                    <option disabled selected>Filter by Alphabetical Order</option>
                    <option value="asc"> A-Z </option>
                    <option value="desc"> Z-A </option>
                </select>
        
                <select className='select' onChange={(event) => sortByScore(event)}>
                    <option disabled selected>Filter by Score</option>
                    <option value="max">Major Score</option>
                    <option value="min">Minor Score</option>
                </select>
        
                <label className="filters">Diet Type:</label>
                <select className='select' onChange={(event) => handleFilterDietType(event)}>
                    <option disabled selected>Types..</option>
                    {
                        diets.map((diet) => (<option value={diet.type}>{diet.type}</option>))
                    }
                </select>
        
            </div>
    
            <Paginated
                recipesPerPage={recipesPerPage}
                recipes={recipes.length}
                paginated={paginated}
            />
    
            <div className='cardContainer'>
                {
                    filteredRecipes().map((recipe) => {
                        return (
                            <div className="card" key={recipe.id}>
                                <Link className="link" to={`/recipes/${recipe.id}`}>
                                    <Recipe
                                        name={recipe.name}
                                        image={recipe.image}
                                        diets={recipe.Diets}
                                    />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Recipes;
