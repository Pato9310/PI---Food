import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getDietsType, getRecipes } from '../../Actions';
import './LandingPage.css';

const LandingPage = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getRecipes());
    //   dispatch(getDietsType());
    // }, [])
    

    return (
        <div className='landingPage'>
            <h1 className='header'>Henry Countries</h1>
            <Link to='/home'>
                <button className='button'>Home</button>
            </Link>
        </div>
    ) 
};

export default LandingPage;
