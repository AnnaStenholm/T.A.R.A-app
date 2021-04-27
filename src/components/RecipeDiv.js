import React, { useEffect, useState } from 'react';


const categories = {
    vego: "60828412282ecd001e7dd309",
    fisk: "608284a6282ecd001e7dd30c",
    kött: "60828441282ecd001e7dd30b"
};

const RecipeDiv = ({kategori}) => {

    const categoryId = categories[kategori];
    let url;
    const [recipeData, setRecipeData] = useState([]); 

    if (categoryId){
    url =
    `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`;

    }


    useEffect(() => {
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
            <strong>{recipe.title}</strong>
            <div>{recipe.content}</div>
        </div>)
        } 
    </>
    );
    }
};

export default RecipeDiv;