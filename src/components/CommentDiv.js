import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { useDispatch, useSelector } from 'react-redux';
import { loadCommentData, postComment, setCommentTitle, setCommentContent, setCurrentId } from '.././redux/recipeSlice';
import PostLike from './PostLike';

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

    dispatch(setCurrentId(recipeId));

    
    return (
    <> 
    <div>
     <div className= "container" >
        <div className="row">

        <h1 className="text-center">Skriv en kommentar</h1>

<div class="form-group">

    <label>Titel</label>
    <input 
    className="form-control"
    type='text' placeholder="Titel" 
    onChange={(event) => dispatch(setCommentTitle(event.target.value))} 
    value={addCommentForm.title}
    />

    <label>Kommentar</label>
    <input 
    className="form-control"
    type='text' placeholder="Kommentar" 
    onChange={(event) => dispatch(setCommentContent(event.target.value))}
    value={addCommentForm.content}
    />

    <button className="btn btn-outline-dark"
    style={{ marginTop: '1em', float: 'right'}}
    onClick={() => dispatch(postComment(addCommentForm))}>
    Publicera
    </button>
</div>


        <h1 className="text-center" >Kommentarer {recipeTitle}</h1>
        {
            commentData.map(comment => (
                <div key={comment._id} className="card" style={{ marginBottom: '2em',  backgroundColor: '#F0DBC1'  }}>
                    <div className="card-body">
                        <h5 className="card-title">{comment.title}</h5>
                        <p className="card-text">{comment.content}</p>

                        <div>
                            <PostLike/>
                        </div>

                    </div>
                </div>
        ))} 


        
        </div>
    </div>
    </div>
    </>
    );
    };

export default CommentDiv;