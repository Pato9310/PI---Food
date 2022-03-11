import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import RecipeCreate from './Components/RecipeCreate/RecipeCreate';

function App() {
    return (
        <Routes>
            <Route exact path= "/" element={<LandingPage/>}/>
            <Route exact path= "/home" element={<Home/>}/>
            <Route exact path= "/recipes/:id" element={<RecipeDetail/>}/>
            <Route exact path= "/create-recipe" element={<RecipeCreate/>}/>
        </Routes>
    );
}

export default App;
