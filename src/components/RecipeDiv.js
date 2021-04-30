import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CommentLink from './CommentLink';
import CommentDiv from './CommentDiv';

const categories = {
    vego: "60828412282ecd001e7dd309",
    fisk: "608284a6282ecd001e7dd30c",
    kött: "60828441282ecd001e7dd30b"
};

const RecipeDiv = ({kategori}) => {

    const categoryId = categories[kategori];
    let recipeUrl;
    const [recipeData, setRecipeData] = useState([]); 

    if (categoryId){
    recipeUrl =
    `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`;

    }


    useEffect(() => {
        dispatch({ type: 'LOAD_RECIPE_DATA', payload: recipeUrl });
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then((data) => setRecipeData(data)); 
        }        
    }, [ url ]);

    if (!categoryId) {

        return <p><strong>Kategorin hittades inte</strong></p>

    } else {

    return (
    <> 
        {
            recipeData.map(recipe => 
        <div key={recipe._id}>
            <br></br>
            <h5>Recept: {recipe.title}</h5>
            <div>{recipe.content}</div>
            <br></br>
            <h5>Kommentarer</h5>
            <CommentDiv recipeId={recipe._id}/>
            <div><CommentLink /></div>
        </div>)
        } 
    </>
    );
    }
};

export default RecipeDiv;