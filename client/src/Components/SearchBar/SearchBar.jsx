import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../../Actions';
import './SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput(()=> event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchRecipes(input));
        setInput('');
    }
    return (
        <div className="formSearchBar">
            <form onSubmit={ event => handleSubmit(event)}>
                <input 
                    className="inputRecipe"
                    type="text"
                    id="title"
                    autoComplete='off'
                    value={input}
                    placeholder= "Search a recipe..."
                    onChange={event=>handleChange(event)}
                />
                <input className="inputButton" type="submit" value=""/>
            </form>
        </div>
  );
};

export default SearchBar;
