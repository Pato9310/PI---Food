import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from './useForm';
import NavBar from '../NavBar/NavBar';
import './RecipeCreate.css';

const initialForm = {
    name: '',
    summary: '',
    score: '',
    healthyScore: '',
    steps: [],
    type: [],
}

const validationsForm = ( form ) => {
    let errors = {};
    if (!form.name) {
        errors.name = "You must complete the 'Name' field."
    } else if (!form.summary) {
        errors.summary = "You must complete the 'Summary' field."
    }else if (!form.score) {
        errors.score = "You must complete the 'Score' field."
    }else if (!form.healthyScore) {
        errors.healthyScore = "You must complete the 'HealthyScore' field."
    }else if (!form.steps) {
        errors.steps = "You must complete the 'Steps' field."
    }else if (!form.type) {
        errors.type = "You must complete the 'Type' field."
    }
    return errors;
}

const RecipeCreate = () => {
    const diets = useSelector( state => state.diets);
    const {
        form,
        errors,
        handleChange,
        // handleBlur,
        handleSubmit,
        handleDelete,
        handleSelect
    } = useForm(initialForm, validationsForm)
    return (
        <div>
            <NavBar/>
            <div className="recipeCardContainer">
                <div className="recipeCard">
                    <form className="formRecipe" onSubmit={handleSubmit}>
                        <span className='titleCreateRecipe'> Create Recipe </span>
                        <div className="inputRecipes">
                            <label className='labelRecipe' id='name'>Name: </label>
                            <input
                                className="i"
                                type="text"
                                placeholder="Recipe name..."
                                value={form.name}
                                name="name"
                                onChange={handleChange}
                            />
                            {errors.name && <p className="e">{errors.name}</p>}
                        </div>
                        <div className="inputRecipes" id='summary'>
                            <label>Summary: </label>
                            <input
                                className="i"
                                type="text"
                                value={form.summary}
                                name="summary"
                                placeholder="Summary..."
                                onChange={handleChange}
                            />
                            {errors.summary && <p className="e">{errors.summary}</p>}
                        </div>
                        <div className="inputRecipes" id='score'>
                            <label>Score :  {form.score} </label>
                            <input
                                className="i"
                                type="range"
                                name="score"
                                min="1"
                                max="100"
                                value={form.score}
                                onChange={(event) => handleChange(event)}
                            />
                            {errors.score && <p className="e"> {errors.score}</p>}
                        </div>
                        <div className="inputRecipes" id='healthyScore'>
                            <label>Healthy Score :  {form.healthyScore}</label>
                            <input
                                className="i"
                                type="range"
                                name="healthyScore"
                                min="1"
                                max="100"
                                value={form.healthyScore}
                                onChange={(event) => handleChange(event)}
                            />
                            {errors.healthyScore && <p className="e">{errors.healthyScore}</p>}
                        </div>
                        <div className="inputRecipes" id='steps'>
                            <label className="msgs">Steps:</label>
                            <textarea
                                name="steps"
                                className="steps"
                                type="text"
                                value={form.steps} 
                                onChange={ (event) => handleChange(event)}
                            />
                            {errors.steps && <p className="errors">{errors.steps}</p>}
                        </div>
                        {errors.id && <p className="e">{errors.id}</p>}

                        <div>
                            <select name="type" className="i" id='type' onChange={(event) => handleSelect(event)}>
                                <option className='op'>Types: </option>
                                {
                                    diets.map((type) => (
                                        <option className='op' value={type}>{type}</option>))
                                }
                            </select>
                        </div>

                        <div className="textArea">
                            {
                                console.log(form)}
                                {form.type.map((type) => 
                                (
                                    <div key={type} className='typeAndButton'>
                                        <input className='btnDelete' type='button' value='X' onClick={() => handleDelete(type)}/>
                                        <p className='pOfType'>{type}</p>
                                    </div>))
                            }
                        </div>
                        <div className='btnContainer'>
                            <button className='btnRecipe' type="submit">Create Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RecipeCreate