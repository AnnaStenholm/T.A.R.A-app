import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentLink from './CommentLink';
import CommentDiv from './CommentDiv';
import { loadRecipeData } from '.././redux/categoryReducer';

const categories = {
    vego: "60828412282ecd001e7dd309",
    fisk: "608284a6282ecd001e7dd30c",
    kött: "60828441282ecd001e7dd30b"
};

const RecipeDiv = ({kategori}) => {

    const categoryId = categories[kategori];
    let categoryUrl;
    
    const recipeData = useSelector(state => state.category.data); 

    const dispatch = useDispatch();


    if (categoryId){
    categoryUrl = `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`;
    }


    useEffect(() => {
        
        if (categoryUrl) {
            dispatch(loadRecipeData(categoryUrl));
        }        
    }, [ categoryUrl ]);

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