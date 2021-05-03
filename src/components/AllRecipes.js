import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryButtons from './CategoryButtons';
import RecipeDiv from './RecipeDiv';


const AllRecipes = () => {
    const params = useParams();

    return (
    <> 
    <h1>Alla {params.kategori}recept</h1>
    <CategoryButtons/>
    <RecipeDiv kategori={params.kategori}></RecipeDiv>
    
    </>
    );
};

export default AllRecipes;