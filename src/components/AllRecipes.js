import React, { useState }from 'react';
import { useParams } from 'react-router-dom';
import CategoryButtons from '../components/CategoryButtons';
import AddRecipeButton from '../components/AddRecipeButton';
import RecipeDiv from '../components/RecipeDiv';
import Gryta from '../components/Ikoner/Gryta';
 

const AllRecipes = () => {
    const params = useParams();
    

    return (
    <> 
    <div className= "container" >
        
            
        
        <div className="row">
            <AddRecipeButton/>
            <h1 className="text-center">Alla recept</h1>
            <h3 className="text-center">Välj kategori</h3>
            <CategoryButtons/>
            
        </div>
            <RecipeDiv kategori={params.kategori}></RecipeDiv>
    </div>
    </>
    
    )};

export default AllRecipes;