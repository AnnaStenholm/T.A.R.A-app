import ReactDOM from "react-dom";
import React, { Component, useEffect, useState } from 'react';


const CommentDiv = ({recipeId}) => {

    
    let url;
    const [commentData, setCommentData] = useState([]); 

    if (recipeId){
    url =
    `https://forum-api-jkrop.ondigitalocean.app/thread/${recipeId}/comment`;

    }


    useEffect(() => {
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then((data) => setCommentData(data)); 
        }        
    }, [ url ]);

    if (!recipeId) {

        return <p><strong>Inga kommentarer hittades</strong></p>

    } else {

    return (
    <> 
        {
            commentData.map(comment => 
        <div key={comment._id}>
            <strong>{comment.title}</strong>
            <div>{comment.content}</div>
        </div>)
        } 
    </>
    );
    }
};

export default CommentDiv;