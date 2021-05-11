import React, { useState }from 'react';
import { useParams } from 'react-router-dom';
import CategoryButtons from './CategoryButtons';
import RecipeDiv from './RecipeDiv';
import Gryta from './Ikoner/Gryta';
 

const AllRecipes = () => {
    const params = useParams();
    

    return (
    <> 
    <div className= "container" >
        <div className="row">
            <h1 className="text-center">Alla {params.kategori}recept</h1>
        </div>
        <div className="row">
            <CategoryButtons/>
        </div>
            <RecipeDiv kategori={params.kategori}></RecipeDiv>
    </div>
    </>
    
    )};

export default AllRecipes;