import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { useDispatch, useSelector } from 'react-redux';
import { loadCommentData, postComment, setCommentTitle, setCommentContent } from '.././redux/recipeSlice';
// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const CommentDiv = ({recipeId, recipeTitle}) => {
    
    const dispatch = useDispatch(); 
    const commentData= useSelector(state => state.recipe.data);
    const addCommentForm = useSelector(state => state.recipe.addCommentForm);
    
    const {id} = useParams();
    if(recipeId == null || recipeId == undefined) { recipeId = id; }
    
    let recipeUrl;
    recipeUrl =
    `https://forum-api-jkrop.ondigitalocean.app/thread/${recipeId}/comment`;

    useEffect(() => {
        if (!commentData.length) {
            dispatch(loadCommentData(recipeUrl));
        }        
    })

    
    return (
    <> 
        <h3>Kommentera {recipeTitle}</h3>
        {
            commentData.map(comment => (
                <div key={comment._id}>
                    <strong>{comment.title}</strong>
                    <div>{comment.content}</div>
                </div>
        ))} 

                    <input 
                    type='text' placeholder="Titel" 
                    onChange={(event) => dispatch(setCommentTitle(event.target.value))} 
                    value={addCommentForm.title}
                    />

                    <input type='text' placeholder="Kommentar" 
                    onChange={(event) => dispatch(setCommentContent(event.target.value))}
                    value={addCommentForm.content}
                    />

                <button onClick={() => dispatch(postComment(addCommentForm))}>Publicera</button>
            
    </>
    );
    };

export default CommentDiv;