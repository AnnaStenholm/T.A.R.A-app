import React, { useEffect, useState } from 'react';

const RecipeTable = () => {

    const url ="https://forum-api-jkrop.ondigitalocean.app/category/60828441282ecd001e7dd30b/thread";

    const [recipeData, setRecipeData] = useState([]); 

    useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then((data) => setRecipeData(data)); 
    })
    
    return (
    <ul> 
        {
            recipeData.map(recipe => 
        <li>
            <strong>{recipe.title}</strong>
            <div>{recipe.content}</div>
        </li>)
        } 
    </ul>
    );
};

export default RecipeTable;