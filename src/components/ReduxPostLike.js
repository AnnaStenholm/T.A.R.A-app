import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { useDispatch, useSelector } from 'react-redux';
import { loadLikeData, postLike, setLike, setCurrentId } from '.././redux/likeSlice';

const PostLike = ({recipeId}) => {
    
    const dispatch = useDispatch(); 
    const likeData= useSelector(state => state.recipe.data);
    const addLike = useSelector(state => state.recipe.addLike);
    
    const {id} = useParams();
    if(recipeId == null || recipeId == undefined) { recipeId = id; }
    
    
    /*const likeUrl =
    `https://forum-api-jkrop.ondigitalocean.app/thread/${recipeId}/like`;
    
    useEffect(() => {
        if (!likeData.length) {
            dispatch(loadLikeData(likeUrl));
        }        
    })*/

    dispatch(setCurrentId(recipeId));

 

    return <> 
            <button onClick={() => dispatch(postLike(addLike))} >Like</button>
      
            <FontAwesomeIcon 
            icon={ faThumbsUp }  
            style={{ color: '#304227', float:'left', marginRight: '20px', fontSize: '2em'}}
            
            >

            </FontAwesomeIcon>
    </>
}

export default PostLike;
